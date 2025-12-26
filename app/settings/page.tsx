"use client"

import { useAuth } from "@/contexts/auth-context"
import { Navbar } from "@/components/layout/navbar"
import { Sidebar } from "@/components/layout/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Bell, Globe, Shield, CreditCard } from "lucide-react"

export default function SettingsPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    bookingUpdates: true,
    promotionalEmails: false,
    twoFactorAuth: false,
  })

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

  const handleToggle = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }))
  }

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
        <main className="flex-1 overflow-y-auto bg-background p-6">
          <div className="mx-auto max-w-4xl space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences and settings</p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  <CardTitle>Notifications</CardTitle>
                </div>
                <CardDescription>Configure how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={settings.emailNotifications}
                    onCheckedChange={() => handleToggle("emailNotifications")}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={settings.pushNotifications}
                    onCheckedChange={() => handleToggle("pushNotifications")}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="booking-updates">Booking Updates</Label>
                    <p className="text-sm text-muted-foreground">Get notified about booking changes</p>
                  </div>
                  <Switch
                    id="booking-updates"
                    checked={settings.bookingUpdates}
                    onCheckedChange={() => handleToggle("bookingUpdates")}
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="promotional-emails">Promotional Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive deals and promotional offers</p>
                  </div>
                  <Switch
                    id="promotional-emails"
                    checked={settings.promotionalEmails}
                    onCheckedChange={() => handleToggle("promotionalEmails")}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <CardTitle>Security</CardTitle>
                </div>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={settings.twoFactorAuth}
                    onCheckedChange={() => handleToggle("twoFactorAuth")}
                  />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Active Sessions</Label>
                  <p className="text-sm text-muted-foreground">Manage devices where you're logged in</p>
                  <Button variant="outline" size="sm">
                    View Active Sessions
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <CardTitle>Preferences</CardTitle>
                </div>
                <CardDescription>Customize your experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    English (US)
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Currency</Label>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    USD ($)
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label>Time Zone</Label>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    (GMT-5:00) Eastern Time
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <CardTitle>Payment Methods</CardTitle>
                </div>
                <CardDescription>Manage your saved payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Add Payment Method</Button>
              </CardContent>
            </Card>

            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                <CardDescription>Irreversible actions for your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Delete Account</p>
                    <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
