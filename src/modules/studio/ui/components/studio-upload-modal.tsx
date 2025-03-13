"use client"

import { ResponsiveDialog } from "@/components/responsive-dialog"
import { Button } from "@/components/ui/button"
import { trpc } from "@/trpc/client"
import { Loader2, Loader2Icon, PlusIcon } from "lucide-react"
import { toast } from "sonner"
import { StudioUploader } from "./studio-uploader"

export const StudioUploadModal = () => {
  const utils = trpc.useUtils()
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video created successfully")
      utils.studio.getMany.invalidate();
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  return (
    <>
      <ResponsiveDialog
        title="Upload a video"
        open={!!create.data?.url}
        onOpenChange={() => create.reset()}
      >
        {create?.data?.url ? (
          <StudioUploader endpoint={create.data.url} onSuccess={() => {}} />
        ) : (
          <Loader2Icon />
        )}
      </ResponsiveDialog>
      <Button
        variant="secondary"
        onClick={() => create.mutate()}
        disabled={create.isPending}
      >
        {create.isPending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <PlusIcon className="w-4 h-4" />
        )}
        Create
      </Button>
    </>
  );
}
