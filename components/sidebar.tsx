import { FolderIcon, Star, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Sidebar() {
  return (
    <div className="w-[240px] border-r">
      <ScrollArea className="h-full py-2">
        <div className="space-y-1 px-2">
          <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-muted">
            <FolderIcon className="h-4 w-4" />
            My Drive
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-muted">
            <Star className="h-4 w-4" />
            Starred
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-muted">
            <Trash className="h-4 w-4" />
            Trash
          </Button>
        </div>
      </ScrollArea>
    </div>
  )
}

