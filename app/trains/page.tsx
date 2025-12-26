"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { TrainSearchForm } from "@/components/forms/train-search-form"
import { TrainResultCard } from "@/components/cards/train-result-card"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

const mockTrains = [
  {
    trainName: "Express Bullet",
    trainNumber: "EXP-2024",
    from: "New York Penn",
    to: "Washington Union",
    departureTime: "08:00 AM",
    arrivalTime: "11:30 AM",
    duration: "3h 30m",
    class: "First Class",
    availableSeats: 45,
    price: "$89",
  },
  {
    trainName: "Regional Express",
    trainNumber: "REG-1523",
    from: "New York Penn",
    to: "Washington Union",
    departureTime: "10:15 AM",
    arrivalTime: "02:00 PM",
    duration: "3h 45m",
    class: "Economy",
    availableSeats: 120,
    price: "$49",
  },
  {
    trainName: "Acela Express",
    trainNumber: "ACE-3045",
    from: "New York Penn",
    to: "Washington Union",
    departureTime: "12:30 PM",
    arrivalTime: "03:45 PM",
    duration: "3h 15m",
    class: "Business",
    availableSeats: 32,
    price: "$129",
  },
  {
    trainName: "Northeast Regional",
    trainNumber: "NER-4567",
    from: "New York Penn",
    to: "Washington Union",
    departureTime: "03:00 PM",
    arrivalTime: "06:45 PM",
    duration: "3h 45m",
    class: "Economy",
    availableSeats: 98,
    price: "$52",
  },
  {
    trainName: "Evening Express",
    trainNumber: "EVE-7890",
    from: "New York Penn",
    to: "Washington Union",
    departureTime: "06:30 PM",
    arrivalTime: "10:00 PM",
    duration: "3h 30m",
    class: "First Class",
    availableSeats: 28,
    price: "$95",
  },
]

export default function TrainsPage() {
  const [priceRange, setPriceRange] = useState([0, 200])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 text-balance">Search Trains</h1>
            <p className="text-muted-foreground text-pretty">Find the best train routes for your journey</p>
          </div>

          <div className="mb-8">
            <TrainSearchForm />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="font-semibold mb-4">Filters</h3>
                  </div>

                  <div className="space-y-3">
                    <Label>Price Range</Label>
                    <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={10} className="mt-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Class</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="economy" />
                        <label htmlFor="economy" className="text-sm cursor-pointer">
                          Economy
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="business" />
                        <label htmlFor="business" className="text-sm cursor-pointer">
                          Business
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="first" />
                        <label htmlFor="first" className="text-sm cursor-pointer">
                          First Class
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Departure Time</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="morning" />
                        <label htmlFor="morning" className="text-sm cursor-pointer">
                          Morning (6AM - 12PM)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="afternoon" />
                        <label htmlFor="afternoon" className="text-sm cursor-pointer">
                          Afternoon (12PM - 6PM)
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="evening" />
                        <label htmlFor="evening" className="text-sm cursor-pointer">
                          Evening (6PM - 12AM)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Train Type</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="express" />
                        <label htmlFor="express" className="text-sm cursor-pointer">
                          Express
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="regional" />
                        <label htmlFor="regional" className="text-sm cursor-pointer">
                          Regional
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="highspeed" />
                        <label htmlFor="highspeed" className="text-sm cursor-pointer">
                          High-Speed
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Results */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-muted-foreground">{mockTrains.length} trains found</p>
              </div>

              {mockTrains.map((train, index) => (
                <TrainResultCard key={index} {...train} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
