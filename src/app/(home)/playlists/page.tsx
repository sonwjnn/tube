import { Default_Limit } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

import { PlaylistsView } from "@/modules/playlist/ui/views/playlists-view";

const Page = async () => {
  void trpc.playlists.getMany.prefetchInfinite({ limit: Default_Limit });

  return (
    <HydrateClient>
      <PlaylistsView />
    </HydrateClient>
  );
};

export default Page;
