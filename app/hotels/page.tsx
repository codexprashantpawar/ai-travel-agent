import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { HotelSearchForm } from "@/components/forms/hotel-search-form"
import { HotelResultCard } from "@/components/cards/hotel-result-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

export default function HotelsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Search Hotels</h1>
              <p className="text-muted-foreground">Discover the perfect place to stay for your journey</p>
            </div>

            <HotelSearchForm />

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
                      <Slider defaultValue={[200]} max={1000} step={25} className="mt-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>$0</span>
                        <span>$1000+</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Star Rating</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="5star" />
                          <label htmlFor="5star" className="text-sm cursor-pointer">
                            5 Stars
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="4star" />
                          <label htmlFor="4star" className="text-sm cursor-pointer">
                            4 Stars
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="3star" />
                          <label htmlFor="3star" className="text-sm cursor-pointer">
                            3 Stars
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Amenities</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="wifi" />
                          <label htmlFor="wifi" className="text-sm cursor-pointer">
                            Free WiFi
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="pool" />
                          <label htmlFor="pool" className="text-sm cursor-pointer">
                            Swimming Pool
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="parking" />
                          <label htmlFor="parking" className="text-sm cursor-pointer">
                            Free Parking
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
                  <p className="text-sm text-muted-foreground">Showing 6 results</p>
                </div>

                <div className="space-y-4">
                  <HotelResultCard
                    name="Grand Plaza Hotel"
                    location="Downtown, New York"
                    rating={5}
                    reviews={1234}
                    price="$299"
                    imageQuery="luxury hotel lobby"
                    amenities={["Free WiFi", "Pool", "Spa", "Restaurant"]}
                  />
                  <HotelResultCard
                    name="Seaside Resort & Spa"
                    location="Miami Beach, Florida"
                    rating={4}
                    reviews={856}
                    price="$199"
                    imageQuery="beach resort hotel"
                    amenities={["Free WiFi", "Beach Access", "Pool", "Bar"]}
                  />
                  <HotelResultCard
                    name="Mountain View Lodge"
                    location="Aspen, Colorado"
                    rating={4}
                    reviews={642}
                    price="$249"
                    imageQuery="mountain lodge hotel"
                    amenities={["Free WiFi", "Ski Access", "Restaurant", "Fireplace"]}
                  />
                  <HotelResultCard
                    name="City Center Inn"
                    location="San Francisco, California"
                    rating={3}
                    reviews={423}
                    price="$149"
                    imageQuery="modern city hotel"
                    amenities={["Free WiFi", "Parking", "Breakfast"]}
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
