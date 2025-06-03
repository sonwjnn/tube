import Image from "next/image";

import { formatDuration } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

import { Thumbnail_Fallback } from "../../constants";

interface VideoThumbnailProps {
  imageUrl?: string | null;
  title: string;
  previewUrl?: string | null;
  duration: number;
}

export const VideoThumbnailSkeleton = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl aspect-video">
      <Skeleton className="size-full" />
    </div>
  );
};

export const VideoThumbnail = ({
  imageUrl,
  title,
  previewUrl,
  duration,
}: VideoThumbnailProps) => {
  return (
    <div className="relative group">
      {/* Thumbnail Wrapper */}
      <div className="relative w-full overflow-hidden rounded-xl aspect-video">
        <Image
          src={imageUrl || Thumbnail_Fallback}
          alt={title}
          fill
          className="size-full object-cover group-hover:opacity-0"
        />
        <Image
          unoptimized={!!previewUrl}
          src={previewUrl || Thumbnail_Fallback}
          alt={title}
          fill
          className="size-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      <div className="absolute bottom-2 right-2 px-1 py-0.5 rounded bg-black/80 text-white text-xs font-medium">
        {formatDuration(duration)}
      </div>
      {/* Video Duration Box */}
    </div>
  );
};
