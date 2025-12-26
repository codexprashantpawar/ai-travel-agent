"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane, Menu, X, User, LogOut } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Plane className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline-block">AI Travel Agent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/flights"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Flights
          </Link>
          <Link
            href="/trains"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Trains
          </Link>
          <Link
            href="/hotels"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Hotels
          </Link>
          <Link
            href="/packages"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Packages
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                    <AvatarFallback>{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/flights"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flights
            </Link>
            <Link
              href="/trains"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Trains
            </Link>
            <Link
              href="/hotels"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link
              href="/packages"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border/40">
              {isAuthenticated ? (
                <>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild className="w-full justify-start">
                    <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                      Profile
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-destructive"
                    onClick={() => {
                      logout()
                      setMobileMenuOpen(false)
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild className="w-full">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                      Register
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
