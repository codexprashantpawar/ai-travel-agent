"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Plane, Hotel, Package, Calendar, User, Settings, LogOut, Train } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Flights",
    href: "/flights",
    icon: Plane,
  },
  {
    title: "Trains",
    href: "/trains",
    icon: Train,
  },
  {
    title: "Hotels",
    href: "/hotels",
    icon: Hotel,
  },
  {
    title: "Packages",
    href: "/packages",
    icon: Package,
  },
  {
    title: "My Bookings",
    href: "/bookings",
    icon: Calendar,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-border/40 bg-card">
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="flex flex-col gap-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="border-t border-border/40 p-3">
        <Button variant="ghost" className="w-full justify-start gap-3" asChild>
          <Link href="/settings">
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-destructive hover:text-destructive"
          onClick={logout}
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  )
}
