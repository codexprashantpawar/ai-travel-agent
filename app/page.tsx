import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FeatureCard } from "@/components/cards/feature-card"
import { Sparkles, Plane, CreditCard } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">AI Travel Agent</h1>
            <p className="text-xl md:text-2xl text-primary font-medium">Plan, Book, and Travel Smarter with AI</p>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Experience the future of travel planning with our AI-powered platform. Get personalized recommendations,
              instant bookings, and seamless travel management all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild>
                <Link href="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Sparkles}
              title="AI Travel Planner"
              description="Get personalized travel recommendations powered by advanced AI. Simply tell us what you want, and we'll plan your perfect trip."
            />
            <FeatureCard
              icon={Plane}
              title="Flight & Hotel Booking"
              description="Search and book flights and hotels from thousands of providers. Compare prices and find the best deals instantly."
            />
            <FeatureCard
              icon={CreditCard}
              title="Secure Payments & Confirmations"
              description="Book with confidence using our secure payment system. Get instant confirmations and manage all your bookings in one place."
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to start your journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of travelers who trust AI Travel Agent for their adventures
            </p>
            <Button size="lg" asChild>
              <Link href="/register">Create Free Account</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
