import type { LucideIcon } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
