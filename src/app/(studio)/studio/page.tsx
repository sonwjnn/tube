import { HydrateClient, trpc } from "@/trpc/server";
import { Default_Limit } from "@/constants";

import { StudioView } from "@/modules/studio/ui/views/studio-view";

export const dynamic = "force-dynamic";

const Page = async () => {
  void trpc.studio.getMany.prefetchInfinite({
    limit: Default_Limit,
  });

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
};

export default Page;
