import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { FlightSearchForm } from "@/components/forms/flight-search-form"
import { FlightResultCard } from "@/components/cards/flight-result-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function FlightsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Search Flights</h1>
              <p className="text-muted-foreground">Find the best flight deals for your next trip</p>
            </div>

            <FlightSearchForm />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Filters Sidebar */}
              <aside className="lg:col-span-1 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Price Range</Label>
                      <Slider defaultValue={[500]} max={2000} step={50} className="mt-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$0</span>
                        <span>$2000+</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Stops</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="nonstop" />
                          <label htmlFor="nonstop" className="text-sm cursor-pointer">
                            Non-stop
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="onestop" />
                          <label htmlFor="onestop" className="text-sm cursor-pointer">
                            1 stop
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="twostop" />
                          <label htmlFor="twostop" className="text-sm cursor-pointer">
                            2+ stops
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Airlines</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="airline1" />
                          <label htmlFor="airline1" className="text-sm cursor-pointer">
                            United Airlines
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="airline2" />
                          <label htmlFor="airline2" className="text-sm cursor-pointer">
                            Delta Airlines
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="airline3" />
                          <label htmlFor="airline3" className="text-sm cursor-pointer">
                            American Airlines
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </aside>

              {/* Results */}
              <div className="lg:col-span-3 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Showing 8 results</p>
                </div>

                <div className="space-y-4">
                  <FlightResultCard
                    airline="United Airlines"
                    from="JFK"
                    to="LAX"
                    departureTime="08:00"
                    arrivalTime="11:30"
                    duration="5h 30m"
                    stops={0}
                    price="$299"
                  />
                  <FlightResultCard
                    airline="Delta Airlines"
                    from="JFK"
                    to="LAX"
                    departureTime="10:15"
                    arrivalTime="13:45"
                    duration="5h 30m"
                    stops={0}
                    price="$325"
                  />
                  <FlightResultCard
                    airline="American Airlines"
                    from="JFK"
                    to="LAX"
                    departureTime="14:30"
                    arrivalTime="18:00"
                    duration="5h 30m"
                    stops={0}
                    price="$289"
                  />
                  <FlightResultCard
                    airline="Southwest Airlines"
                    from="JFK"
                    to="LAX"
                    departureTime="16:45"
                    arrivalTime="22:30"
                    duration="7h 45m"
                    stops={1}
                    price="$249"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
