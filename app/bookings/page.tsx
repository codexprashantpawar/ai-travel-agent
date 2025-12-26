"use client"

import { useAuth } from "@/contexts/auth-context"
import { Navbar } from "@/components/layout/navbar"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Plane, Hotel, Package, Calendar, MapPin, Download, Mail } from "lucide-react"

export default function BookingsPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const upcomingBookings = [
    {
      id: 1,
      type: "flight",
      title: "Flight to Tokyo",
      from: "New York (JFK)",
      to: "Tokyo (NRT)",
      date: "Dec 15, 2025",
      time: "10:30 AM",
      bookingRef: "FL-2025-001",
      price: "$899",
    },
    {
      id: 2,
      type: "hotel",
      title: "Grand Hotel Paris",
      location: "Paris, France",
      checkIn: "Nov 20, 2025",
      checkOut: "Nov 25, 2025",
      bookingRef: "HT-2025-002",
      price: "$1,250",
    },
    {
      id: 3,
      type: "package",
      title: "Mediterranean Cruise",
      location: "Multiple Cities",
      startDate: "Jan 10, 2026",
      duration: "7 days",
      bookingRef: "PK-2025-003",
      price: "$2,499",
    },
  ]

  const pastBookings = [
    {
      id: 4,
      type: "hotel",
      title: "Beach Resort Bali",
      location: "Bali, Indonesia",
      checkIn: "Sep 5, 2025",
      checkOut: "Sep 12, 2025",
      bookingRef: "HT-2025-004",
      price: "$980",
    },
    {
      id: 5,
      type: "flight",
      title: "Flight to London",
      from: "New York (JFK)",
      to: "London (LHR)",
      date: "Aug 20, 2025",
      time: "6:00 PM",
      bookingRef: "FL-2025-005",
      price: "$650",
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "flight":
        return <Plane className="h-5 w-5" />
      case "hotel":
        return <Hotel className="h-5 w-5" />
      case "package":
        return <Package className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-background p-6">
          <div className="mx-auto max-w-6xl space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Bookings</h1>
              <p className="text-muted-foreground">View and manage all your travel bookings</p>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="past">Past</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming" className="space-y-4 mt-6">
                {upcomingBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {getIcon(booking.type)}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{booking.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <MapPin className="h-3 w-3" />
                              {booking.type === "flight" ? `${booking.from} → ${booking.to}` : booking.location}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge>Upcoming</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {booking.type === "flight" ? "Departure" : "Check-in"}
                          </p>
                          <p className="font-medium">{booking.type === "flight" ? booking.date : booking.checkIn}</p>
                          {booking.time && <p className="text-sm text-muted-foreground">{booking.time}</p>}
                        </div>
                        {booking.checkOut && (
                          <div>
                            <p className="text-sm text-muted-foreground">Check-out</p>
                            <p className="font-medium">{booking.checkOut}</p>
                          </div>
                        )}
                        {booking.duration && (
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-medium">{booking.duration}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-muted-foreground">Booking Reference</p>
                          <p className="font-medium font-mono text-sm">{booking.bookingRef}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Price</p>
                          <p className="font-bold text-lg">{booking.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download Ticket
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="past" className="space-y-4 mt-6">
                {pastBookings.map((booking) => (
                  <Card key={booking.id} className="opacity-75">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                            {getIcon(booking.type)}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{booking.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <MapPin className="h-3 w-3" />
                              {booking.type === "flight" ? `${booking.from} → ${booking.to}` : booking.location}
                            </CardDescription>
                          </div>
                        </div>
                        <Badge variant="secondary">Completed</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {booking.type === "flight" ? "Departure" : "Check-in"}
                          </p>
                          <p className="font-medium">{booking.type === "flight" ? booking.date : booking.checkIn}</p>
                          {booking.time && <p className="text-sm text-muted-foreground">{booking.time}</p>}
                        </div>
                        {booking.checkOut && (
                          <div>
                            <p className="text-sm text-muted-foreground">Check-out</p>
                            <p className="font-medium">{booking.checkOut}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-muted-foreground">Booking Reference</p>
                          <p className="font-medium font-mono text-sm">{booking.bookingRef}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Total Price</p>
                          <p className="font-bold text-lg">{booking.price}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download Receipt
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
