import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Train, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TrainResultCardProps {
  trainName: string
  trainNumber: string
  from: string
  to: string
  departureTime: string
  arrivalTime: string
  duration: string
  class: string
  availableSeats: number
  price: string
}

export function TrainResultCard({
  trainName,
  trainNumber,
  from,
  to,
  departureTime,
  arrivalTime,
  duration,
  class: trainClass,
  availableSeats,
  price,
}: TrainResultCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Train className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold">{trainName}</p>
                <p className="text-sm text-muted-foreground">{trainNumber}</p>
              </div>
              <Badge variant="secondary" className="ml-2">
                {trainClass}
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-2xl font-bold">{departureTime}</p>
                <p className="text-sm text-muted-foreground">{from}</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full h-px bg-border" />
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="h-3 w-3" />
                  {duration}
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{arrivalTime}</p>
                <p className="text-sm text-muted-foreground">{to}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{availableSeats} seats available</p>
          </div>

          <div className="flex flex-col items-end gap-3 md:border-l md:border-border md:pl-6">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">From</p>
              <p className="text-3xl font-bold text-primary">{price}</p>
            </div>
            <Button className="w-full md:w-auto">Book Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
