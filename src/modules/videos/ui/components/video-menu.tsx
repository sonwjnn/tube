import { toast } from "sonner";
import { useState } from "react";

import {
  ListPlusIcon,
  MoreVerticalIcon,
  ShareIcon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { App_Url } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlaylistAddModal } from "@/modules/playlist/ui/components/playlist-add-modal";

interface VideoMenuProps {
  videoId: string;
  variant?: "ghost" | "secondary";
  onRemove?: () => void;
}

export const VideoMenu = ({
  videoId,
  variant = "ghost",
  onRemove,
}: VideoMenuProps) => {
  const [openIsPlaylstAddModal, setIsOpenPlaylistAddModal] = useState(false);

  const onShare = () => {
    const fullUrl = `${App_Url}/videos/${videoId}`;
    navigator.clipboard.writeText(fullUrl);
    toast.success("Link Copied to Clipboard");
  };

  return (
    <>
      <PlaylistAddModal
      videoId={videoId}
        open={openIsPlaylstAddModal}
        onOpenChange={setIsOpenPlaylistAddModal}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={"icon"} className="rounded-full">
            <MoreVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
          <DropdownMenuItem onClick={onShare}>
            <ShareIcon className="mr-2 size-4" />
            Share
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsOpenPlaylistAddModal(true)}>
            <ListPlusIcon className="mr-2 size-4" />
            Add to Playlist
          </DropdownMenuItem>
          {onRemove && (
            <DropdownMenuItem onClick={() => {}}>
              <Trash2Icon className="mr-2 size-4" />
              Remove from Playlist
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
