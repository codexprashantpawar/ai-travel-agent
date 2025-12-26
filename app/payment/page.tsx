import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { PaymentForm } from "@/components/forms/payment-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function PaymentPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 max-w-5xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Complete Your Booking</h1>
              <p className="text-muted-foreground">Review your order and enter payment details</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-1">European Adventure</h3>
                      <p className="text-sm text-muted-foreground">10 Days • 2 Travelers</p>
                      <Badge variant="secondary" className="mt-2">
                        Package
                      </Badge>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Package Price</span>
                        <span>$2,499</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Travelers (x2)</span>
                        <span>$4,998</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Taxes & Fees</span>
                        <span>$350</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">$5,348</span>
                    </div>

                    <div className="bg-muted p-3 rounded-lg text-sm">
                      <p className="text-muted-foreground">Free cancellation up to 48 hours before departure</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Payment Form */}
              <div className="lg:col-span-2">
                <PaymentForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
