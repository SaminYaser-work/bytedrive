import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  path: string[]
}

export function Navigation({ path }: NavigationProps) {
  return (
    <nav className="flex items-center space-x-1">
      {path.map((item, index) => (
        <div key={item} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          <Button variant="link" className="text-sm font-medium">
            {item}
          </Button>
        </div>
      ))}
    </nav>
  )
}

