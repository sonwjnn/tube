import { HydrateClient, trpc } from "@/trpc/server";

import { Default_Limit } from "@/constants";

import { SubscribedView } from "@/modules/home/ui/views/subscribed-view";

export const dynamic = "force-dynamic";

const Page = async () => {
  void trpc.videos.getManySubscribed.prefetchInfinite({
    limit: Default_Limit,
  });

  return (
    <HydrateClient>
      <SubscribedView />
    </HydrateClient>
  );
};

export default Page;
