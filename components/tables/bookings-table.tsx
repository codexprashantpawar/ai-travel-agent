import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface Booking {
  id: string
  customer: string
  email: string
  type: string
  destination: string
  date: string
  amount: string
  status: "confirmed" | "pending" | "cancelled"
}

const bookings: Booking[] = [
  {
    id: "BK001",
    customer: "John Smith",
    email: "john@example.com",
    type: "Flight",
    destination: "Tokyo, Japan",
    date: "Dec 15, 2025",
    amount: "$1,299",
    status: "confirmed",
  },
  {
    id: "BK002",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    type: "Package",
    destination: "Paris, France",
    date: "Nov 20, 2025",
    amount: "$2,499",
    status: "confirmed",
  },
  {
    id: "BK003",
    customer: "Mike Davis",
    email: "mike@example.com",
    type: "Hotel",
    destination: "Bali, Indonesia",
    date: "Jan 10, 2026",
    amount: "$899",
    status: "pending",
  },
  {
    id: "BK004",
    customer: "Emily Brown",
    email: "emily@example.com",
    type: "Flight",
    destination: "London, UK",
    date: "Oct 5, 2025",
    amount: "$799",
    status: "cancelled",
  },
]

export function BookingsTable() {
  const statusColors = {
    confirmed: "bg-green-500/10 text-green-500 hover:bg-green-500/20",
    pending: "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
    cancelled: "bg-red-500/10 text-red-500 hover:bg-red-500/20",
  }

  return (
    <div className="rounded-md border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Destination</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{booking.customer}</p>
                  <p className="text-sm text-muted-foreground">{booking.email}</p>
                </div>
              </TableCell>
              <TableCell>{booking.type}</TableCell>
              <TableCell>{booking.destination}</TableCell>
              <TableCell>{booking.date}</TableCell>
              <TableCell className="font-semibold">{booking.amount}</TableCell>
              <TableCell>
                <Badge variant="secondary" className={statusColors[booking.status]}>
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
