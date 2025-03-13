import { db } from "@/db";
import { videos } from "@/db/schema";
import { mux } from "@/lib/mux";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const videoRouter = createTRPCRouter({
  // getMany: protectedProcedure.query(async () => {
  //   const data = await db.select().from(videos)
  //   return data
  // }),
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const { id: userId } = ctx.user;

    const upload = await mux.video.uploads.create({
      new_asset_settings: {
        passthrough: userId,
        playback_policy: ["public"],
      },
      cors_origin: "*",
    })

    const [video] = await db
      .insert(videos)
      .values({
        userId,
        title: "Untitled",
        muxUploadId: upload.id,
        muxStatus: "waiting",
      })
      .returning();

    return {
      video: video,
      url: upload.url,
    };
  }),
});

