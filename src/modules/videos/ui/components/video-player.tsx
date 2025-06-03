"use client";

import MuxPlayer from "@mux/mux-player-react";

import { Thumbnail_Fallback } from "../../constants";

interface VideoPlayerProps {
  playbackId?: string | null | undefined;
  thumbnailUrl?: string | null | undefined;
  autoPlay?: boolean;
  onPlay?: () => void;
}

export const VideoPlayerSkeleton = () => {
  return (
    <div className="aspect-video bg-black rounded-xl" />
  )
}

export const VideoPlayer = ({
  playbackId,
  thumbnailUrl,
  autoPlay,
  onPlay,
}: VideoPlayerProps) => {
  //   if (!playbackId) return null;

  return (
    <MuxPlayer
      playbackId={playbackId || ""}
      poster={thumbnailUrl || Thumbnail_Fallback}
      playerInitTime={0}
      autoPlay={autoPlay}
      className="w-full h-full object-contain"
      accentColor="#ff2056"
      onPlay={onPlay}
    />
  );
};
