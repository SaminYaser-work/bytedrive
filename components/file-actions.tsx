import { Copy, MoreVertical, Pencil, Star, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FileActionsProps {
  file: {
    id: string
    name: string
    favorite: boolean
  }
}

export function FileActions({ file }: FileActionsProps) {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
              </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <DropdownMenuItem>
                  <Star className="mr-2 h-4 w-4" />
                  {file.favorite ? "Remove from Starred" : "Add to Starred"}
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Pencil className="mr-2 h-4 w-4" />
                  Rename
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  Make a copy
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
              </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
  );
}

