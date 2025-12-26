import { RegisterForm } from "@/components/forms/register-form"
import { Navbar } from "@/components/layout/navbar"
import { Plane } from 'lucide-react'
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                <Plane className="h-6 w-6 text-primary-foreground" />
              </div>
            </Link>
            <h1 className="text-3xl font-bold">AI Travel Agent</h1>
          </div>
          <RegisterForm />
        </div>
      </main>
    </div>
  )
}
