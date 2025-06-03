import { HydrateClient, trpc } from "@/trpc/server";

import { Default_Limit } from "@/constants";

import { VideoView } from "@/modules/videos/ui/views/video-view";

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { videoId } = await params;

  void trpc.videos.getOne.prefetch({ id: videoId });
  void trpc.comments.getMany.prefetchInfinite({
    videoId,
    limit: Default_Limit,
  });
  void trpc.suggestions.getMany.prefetchInfinite({
    videoId,
    limit: Default_Limit,
  });

  return (
    <HydrateClient>
      <VideoView videoId={videoId} />
    </HydrateClient>
  );
};

export default Page;
