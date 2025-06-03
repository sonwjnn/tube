import { Default_Limit } from "@/constants";
import { HydrateClient, trpc } from "@/trpc/server";

import { HistoryView } from "../ui/views/history-view";

const Page = async () => {
  void trpc.playlists.getHistory.prefetchInfinite({ limit: Default_Limit });

  return (
    <HydrateClient>
      <HistoryView />
    </HydrateClient>
  );
};

export default Page;
