import Link from "next/link"
import { Plane } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Plane className="h-4 w-4 text-primary-foreground" />
              </div>
              <span>AI Travel Agent</span>
            </Link>
            <p className="text-sm text-muted-foreground">Plan, Book, and Travel Smarter with AI</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/flights" className="hover:text-foreground transition-colors">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-foreground transition-colors">
                  Hotels
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-foreground transition-colors">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/support" className="hover:text-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/notifications" className="hover:text-foreground transition-colors">
                  Notifications
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-foreground transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © 2025 AI Travel Agent. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
