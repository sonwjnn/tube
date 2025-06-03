import { UploadIcon } from "lucide-react";

import MuxUploader, {
  MuxUploaderDrop,
  MuxUploaderFileSelect,
  MuxUploaderProgress,
  MuxUploaderStatus,
} from "@mux/mux-uploader-react";

import { Button } from "@/components/ui/button";

interface StudioUploaderProps {
  endpoint?: string | null;
  onSuccess: () => void;
}

const Uploader_Id = "video-uploader";

export const StudioUploader = ({
  endpoint,
  onSuccess,
}: StudioUploaderProps) => {
  return (
    <div className="">
      <MuxUploader
        onSuccess={onSuccess}
        endpoint={endpoint}
        id={Uploader_Id}
        className="hidden group/uploader"
      />
      <MuxUploaderDrop muxUploader={Uploader_Id} className="group/drop">
        <div className="flex flex-col items-center gap-6" slot="heading">
          <div className="flex items-center justify-center gap-2 rounded-full bg-muted h-32 w-32">
            <UploadIcon className="size-10 text-muted-foreground group/drop-[&[active]]:animate-bounce transition-all duration-300" />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm">Drag and Drop Video Files to Upload</p>
            <p className="text-xs text-muted-foreground">
              Your videos will be private untill you publish them
            </p>
          </div>
          <MuxUploaderFileSelect muxUploader={Uploader_Id}>
            <Button type="button" className="rounded-full">
              Select Files
            </Button>
          </MuxUploaderFileSelect>
        </div>
        <span className="hidden" slot="separator" />
        <MuxUploaderStatus muxUploader={Uploader_Id} className="text-sm" />
        <MuxUploaderProgress
          muxUploader={Uploader_Id}
          className="text-sm"
          type="radial"
        />
        <MuxUploaderProgress muxUploader={Uploader_Id} type="percentage" />
        <MuxUploaderProgress muxUploader={Uploader_Id} type="bar" />
      </MuxUploaderDrop>
    </div>
  );
};
