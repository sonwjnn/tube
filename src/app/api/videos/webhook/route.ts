import { eq } from "drizzle-orm";
import { headers } from "next/headers";

import {
  VideoAssetCreatedWebhookEvent,
  VideoAssetErroredWebhookEvent,
  VideoAssetReadyWebhookEvent,
  VideoAssetTrackReadyWebhookEvent
} from "@mux/mux-node/resources/webhooks";
import { mux } from "@/lib/mux";
import { videos } from "@/db/schema";
import { db } from "@/db";

const SIGNING_SECRET = process.env.MUX_WEBHOOK_SECRET;

type WebhookEvent =
  | VideoAssetCreatedWebhookEvent
  | VideoAssetReadyWebhookEvent
  | VideoAssetErroredWebhookEvent
  | VideoAssetTrackReadyWebhookEvent;


export const POST = async (req: Request) => {
  if(!SIGNING_SECRET) {
    return new Response("Signing secret not found", { status: 500 });
  }

  const headersList = await headers();
  const signature = headersList.get("mux-signature");
  
  if(!signature) {
    return new Response("No signature found", { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  mux.webhooks.verifySignature(body, {
    "mux-signature": signature
  }, SIGNING_SECRET);
  
  
  switch(payload.type as WebhookEvent["type"]) {
    case "video.asset.created": {
      const data = payload.data as VideoAssetCreatedWebhookEvent["data"];

      if(!data.upload_id) {
        return new Response("No upload ID found", { status: 400 });
      }

      await db.update(videos).set({
        muxAssetId: data.id,
        muxStatus: data.status,
      }).where(eq(videos.muxUploadId, data.upload_id));
      break;
    }
  }

  return new Response("Webhook received", { status: 200 });
}