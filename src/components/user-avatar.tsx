import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cva, VariantProps } from "class-variance-authority";
import { UserIcon } from "lucide-react";

const avatarVariants = cva("size-8", {
  variants: {
    size: {
      default: "size 9",
      xs: "size-4",
      sm: "size-6",
      lg: "size-10",
      xl: "size-[160px]",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface UserAvatarProps extends VariantProps<typeof avatarVariants> {
  imageUrl?: string;
  name:string
  className?: string;
  onClick?: () => void;
}

export const UserAvatar = ({
  className,
  imageUrl,
  name,
  size,
  onClick,
  ...props

}: UserAvatarProps) => {
  return (
    <Avatar
      className={cn(avatarVariants({ size, className }), className)}
      {...props}
      onClick={onClick}
    >
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback>
        <UserIcon className="size-4" />
      </AvatarFallback>
    </Avatar>
  );
};


