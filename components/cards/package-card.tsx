import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Check } from "lucide-react"

interface PackageCardProps {
  title: string
  description: string
  destination: string
  duration: string
  groupSize: string
  price: string
  imageQuery: string
  features: string[]
  popular?: boolean
}

export function PackageCard({
  title,
  description,
  destination,
  duration,
  groupSize,
  price,
  imageQuery,
  features,
  popular = false,
}: PackageCardProps) {
  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${popular ? "border-primary" : ""}`}>
      {popular && (
        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-semibold">Most Popular</div>
      )}
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img
          src={`/.jpg?height=300&width=500&query=${encodeURIComponent(imageQuery)}`}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-md font-bold">
          {price}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{destination}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{groupSize}</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold">What's Included:</p>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <Button className="w-full" size="lg">
          Book Package
        </Button>
      </CardContent>
    </Card>
  )
}
