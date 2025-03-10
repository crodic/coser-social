import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ImageIcon, Smile, Video } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface CreatePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreatePostModal({ open, onOpenChange }: CreatePostModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Create post</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="flex items-start space-x-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
              <AvatarFallback className="bg-blue-500 text-white">LM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="font-semibold">Lerro Mao</div>
              <div className="text-xs text-gray-500">Public</div>
            </div>
          </div>
          <Textarea
            className="mt-4 min-h-[120px] resize-none border-0 focus-visible:ring-0"
            placeholder="What's on your mind, Lerro?"
          />
          <div className="mt-4 rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Add to your post</div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ImageIcon className="text-green-500" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Video className="text-red-500" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Smile className="text-yellow-500" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600">Post</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
