import { HydrateClient, trpc } from "@/trpc/server";

import { Default_Limit } from "@/constants";

import { HomeView } from "@/modules/home/ui/views/home-view";

export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<{
    categoryId?: string
  }>
}

const Page = async ({ searchParams}: PageProps) => {
  const { categoryId} = await searchParams;

  void trpc.categories.getMany.prefetch();
  void  trpc.videos.getMany.prefetchInfinite({ categoryId, limit: Default_Limit})

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}

export default Page