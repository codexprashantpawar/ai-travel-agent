import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin } from "lucide-react"

interface HotelResultCardProps {
  name: string
  location: string
  rating: number
  reviews: number
  price: string
  imageQuery: string
  amenities: string[]
}

export function HotelResultCard({
  name,
  location,
  rating,
  reviews,
  price,
  imageQuery,
  amenities,
}: HotelResultCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 aspect-video md:aspect-square relative overflow-hidden bg-muted">
          <img
            src={`/.jpg?height=300&width=400&query=${encodeURIComponent(imageQuery)}`}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="flex-1 p-6">
          <div className="flex flex-col h-full justify-between gap-4">
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-bold mb-1">{name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {location}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < rating ? "fill-accent text-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity) => (
                  <Badge key={amenity} variant="secondary" className="text-xs">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Per night from</p>
                <p className="text-2xl font-bold text-primary">{price}</p>
              </div>
              <Button>Book Now</Button>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
