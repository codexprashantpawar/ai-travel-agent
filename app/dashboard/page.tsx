"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { AIChatAssistant } from "@/components/chat/ai-chat-assistant"
import { BookingCard } from "@/components/cards/booking-card"
import { SuggestionCard } from "@/components/cards/suggestion-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Plane, Hotel, TrendingUp } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardPage() {
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

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
              <p className="text-muted-foreground">Here's what's happening with your travel plans</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Flights Booked</CardTitle>
                  <Plane className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Across 4 destinations</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Hotels Booked</CardTitle>
                  <Hotel className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">15 nights total</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Money Saved</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,240</div>
                  <p className="text-xs text-muted-foreground">With AI recommendations</p>
                </CardContent>
              </Card>
            </div>

            {/* AI Chat Assistant */}
            <div>
              <h2 className="text-2xl font-bold mb-4">AI Travel Assistant</h2>
              <AIChatAssistant />
            </div>

            {/* Recent Bookings */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Recent Bookings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BookingCard
                  title="Flight to Tokyo"
                  destination="Tokyo, Japan"
                  date="Dec 15, 2025"
                  status="upcoming"
                  type="flight"
                />
                <BookingCard
                  title="Grand Hotel Paris"
                  destination="Paris, France"
                  date="Nov 20, 2025"
                  status="upcoming"
                  type="hotel"
                />
                <BookingCard
                  title="Europe Adventure"
                  destination="Multiple Cities"
                  date="Oct 10, 2025"
                  status="completed"
                  type="package"
                />
                <BookingCard
                  title="Beach Resort Bali"
                  destination="Bali, Indonesia"
                  date="Sep 5, 2025"
                  status="completed"
                  type="hotel"
                />
              </div>
            </div>

            {/* Personalized Suggestions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Personalized Suggestions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SuggestionCard
                  title="Weekend in Barcelona"
                  description="Explore the vibrant culture and stunning architecture of Barcelona"
                  price="$599"
                  imageQuery="barcelona sagrada familia"
                />
                <SuggestionCard
                  title="Tokyo Cherry Blossom"
                  description="Experience the magical cherry blossom season in Japan's capital"
                  price="$1,299"
                  imageQuery="tokyo cherry blossoms"
                />
                <SuggestionCard
                  title="Maldives Paradise"
                  description="Relax in luxury overwater bungalows in the crystal-clear waters"
                  price="$2,499"
                  imageQuery="maldives overwater bungalow"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
