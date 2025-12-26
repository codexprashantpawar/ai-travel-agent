import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Plane } from "lucide-react"

interface BookingCardProps {
  title: string
  destination: string
  date: string
  status: "upcoming" | "completed" | "cancelled"
  type: "flight" | "hotel" | "package"
}

export function BookingCard({ title, destination, date, status, type }: BookingCardProps) {
  const statusColors = {
    upcoming: "text-primary",
    completed: "text-green-500",
    cancelled: "text-destructive",
  }

  const typeIcons = {
    flight: Plane,
    hotel: MapPin,
    package: Calendar,
  }

  const Icon = typeIcons[type]

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3" />
                {destination}
              </CardDescription>
            </div>
          </div>
          <span className={`text-xs font-medium capitalize ${statusColors[status]}`}>{status}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            {date}
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
