import { Default_Limit } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

import { LikedView } from "@/modules/playlist/ui/views/liked-view";

const Page = async () => {
  void trpc.playlists.getLiked.prefetchInfinite({ limit: Default_Limit });

  return (
    <HydrateClient>
      <LikedView />
    </HydrateClient>
  );
};

export default Page;
