import { HydrateClient, trpc } from "@/trpc/server";

import { Default_Limit } from "@/constants";

import { TrendingView } from "@/modules/home/ui/views/trending-view";

export const dynamic = "force-dynamic";

const Page = async () => {
  void trpc.videos.getManyTrending.prefetchInfinite({
    limit: Default_Limit,
  });

  return (
    <HydrateClient>
      <TrendingView />
    </HydrateClient>
  );
};

export default Page;
