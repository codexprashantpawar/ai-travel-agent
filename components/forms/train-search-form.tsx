"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function TrainSearchForm() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState<Date>()
  const [passengers, setPassengers] = useState("1")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Train search:", { from, to, date, passengers })
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from">From Station</Label>
              <Input
                id="from"
                placeholder="Departure station"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="to">To Station</Label>
              <Input
                id="to"
                placeholder="Arrival station"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="passengers">Passengers</Label>
              <Input
                id="passengers"
                type="number"
                min="1"
                max="10"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            <Search className="mr-2 h-4 w-4" />
            Search Trains
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
