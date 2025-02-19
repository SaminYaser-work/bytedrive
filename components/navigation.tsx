import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  path: string[]
  onPathClick: (index: number) => void
}

export function Navigation({ path, onPathClick }: NavigationProps) {
  return (
    <nav className="flex items-center space-x-1">
      {path.map((item, index) => (
        <div key={item} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          <Button variant="link" className="text-sm font-medium" onClick={() => onPathClick(index)}>
            {item}
          </Button>
        </div>
      ))}
    </nav>
  )
}

