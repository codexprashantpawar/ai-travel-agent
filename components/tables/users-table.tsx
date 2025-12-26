import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  bookings: number
  joined: string
  status: "active" | "inactive"
}

const users: User[] = [
  {
    id: "U001",
    name: "John Smith",
    email: "john@example.com",
    role: "user",
    bookings: 12,
    joined: "Jan 2024",
    status: "active",
  },
  {
    id: "U002",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "user",
    bookings: 8,
    joined: "Mar 2024",
    status: "active",
  },
  {
    id: "U003",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    bookings: 0,
    joined: "Dec 2023",
    status: "active",
  },
  {
    id: "U004",
    name: "Mike Davis",
    email: "mike@example.com",
    role: "user",
    bookings: 3,
    joined: "Jun 2024",
    status: "inactive",
  },
]

export function UsersTable() {
  return (
    <div className="rounded-md border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Bookings</TableHead>
            <TableHead>Joined</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.id}</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={user.role === "admin" ? "default" : "secondary"}>{user.role}</Badge>
              </TableCell>
              <TableCell>{user.bookings}</TableCell>
              <TableCell>{user.joined}</TableCell>
              <TableCell>
                <Badge
                  variant="secondary"
                  className={
                    user.status === "active"
                      ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                      : "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20"
                  }
                >
                  {user.status}
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
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Edit User</DropdownMenuItem>
                    <DropdownMenuItem>Reset Password</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Deactivate User</DropdownMenuItem>
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
