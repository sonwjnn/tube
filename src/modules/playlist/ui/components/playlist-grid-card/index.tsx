import Link from "next/link";

import { playlistGetManyOutput } from "@/modules/playlist/types";
import { Thumbnail_Fallback } from "@/modules/videos/constants";

import { PlaylistThumbnail, PlaylistThumbnailSkeleton } from "./playlist-thumbnail";
import { PlaylistInfo, PlaylistInfoSekeleton } from "./playlist-info";

interface PlaylistGridCardProps {
  data: playlistGetManyOutput["items"][number];
}

export const PlaylistGridCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <PlaylistThumbnailSkeleton />
            <PlaylistInfoSekeleton />
        </div>
    )
}

export const PlaylistGridCard = ({ data }: PlaylistGridCardProps) => {
  return (
    <Link href={`/playlists/${data.id}`}>
      <div className="flex flex-col gap-2 w-full group">
        <PlaylistThumbnail
          imageUrl={data.thumbnailUrl || Thumbnail_Fallback}
          title={data.name}
          videoCount={data.videoCount}
        />
        <PlaylistInfo data={data} />
      </div>
    </Link>
  );
};
