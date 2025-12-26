import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface SuggestionCardProps {
  title: string
  description: string
  price: string
  imageQuery: string
}

export function SuggestionCard({ title, description, price, imageQuery }: SuggestionCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img
          src={`/.jpg?height=200&width=400&query=${encodeURIComponent(imageQuery)}`}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-semibold">
          {price}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          {title}
        </CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Explore Now</Button>
      </CardContent>
    </Card>
  )
}
