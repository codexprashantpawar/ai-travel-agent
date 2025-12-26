import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { PackageCard } from "@/components/cards/package-card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Travel Packages</h1>
              <p className="text-muted-foreground">Discover curated travel experiences designed just for you</p>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search packages by destination..." className="pl-10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PackageCard
                title="European Adventure"
                description="Explore the best of Europe with visits to Paris, Rome, and Barcelona"
                destination="Europe"
                duration="10 Days"
                groupSize="2-8"
                price="$2,499"
                imageQuery="european cities paris eiffel tower"
                features={[
                  "Round-trip flights",
                  "4-star hotels",
                  "Daily breakfast",
                  "Guided city tours",
                  "Airport transfers",
                ]}
                popular={true}
              />
              <PackageCard
                title="Tropical Paradise"
                description="Relax on pristine beaches in the Maldives with luxury accommodations"
                destination="Maldives"
                duration="7 Days"
                groupSize="2-4"
                price="$3,299"
                imageQuery="maldives beach resort overwater villa"
                features={[
                  "Round-trip flights",
                  "5-star resort",
                  "All-inclusive meals",
                  "Water sports",
                  "Spa treatments",
                ]}
              />
              <PackageCard
                title="Asian Discovery"
                description="Experience the culture and beauty of Thailand, Vietnam, and Cambodia"
                destination="Southeast Asia"
                duration="14 Days"
                groupSize="4-12"
                price="$1,899"
                imageQuery="thailand temples bangkok"
                features={["Round-trip flights", "3-star hotels", "Daily breakfast", "Cultural tours", "Local guides"]}
              />
              <PackageCard
                title="Safari Adventure"
                description="Witness incredible wildlife in Kenya and Tanzania's national parks"
                destination="East Africa"
                duration="8 Days"
                groupSize="4-8"
                price="$4,199"
                imageQuery="african safari wildlife elephants"
                features={["Round-trip flights", "Safari lodges", "All meals included", "Game drives", "Expert guides"]}
              />
              <PackageCard
                title="South American Explorer"
                description="Discover Machu Picchu, Rio de Janeiro, and Buenos Aires"
                destination="South America"
                duration="12 Days"
                groupSize="2-10"
                price="$2,799"
                imageQuery="machu picchu peru mountains"
                features={[
                  "Round-trip flights",
                  "4-star hotels",
                  "Daily breakfast",
                  "Historical tours",
                  "Train to Machu Picchu",
                ]}
                popular={true}
              />
              <PackageCard
                title="Australian Wonders"
                description="Experience Sydney, Great Barrier Reef, and the Outback"
                destination="Australia"
                duration="10 Days"
                groupSize="2-6"
                price="$3,599"
                imageQuery="sydney opera house australia"
                features={["Round-trip flights", "4-star hotels", "Daily breakfast", "Reef snorkeling", "City tours"]}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
