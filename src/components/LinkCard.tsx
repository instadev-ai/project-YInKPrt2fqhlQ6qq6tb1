import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface LinkCardProps {
  title: string
  url: string
  onClick: () => void
}

export function LinkCard({ title, url, onClick }: LinkCardProps) {
  return (
    <Card className="w-full p-4 hover:shadow-lg transition-shadow">
      <Button 
        variant="ghost" 
        className="w-full h-full text-lg font-medium"
        onClick={onClick}
      >
        {title}
      </Button>
    </Card>
  )
}