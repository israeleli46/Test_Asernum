import { ArrowUpRight, Store, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface StoreCardProps {
  name: string
  code: string
  city: string
  area: string
}

export function StoreCard({ name, code, city, area }: StoreCardProps) {
  return (
    <Card className="min-w-[350px] h-[200px] border-0 rounded-4xl py-1 cursor-pointer hover:shadow-xl transition-all duration-300 bg-transparent">
  
  <CardContent className="p-6">
    
    <div className="flex items-start justify-between mb-5">
      
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
        <Store className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors">
        <ArrowUpRight className="w-5 h-5 text-muted-foreground " color="#E02020"/>
      </div>

    </div>

    <h4 className="font-semibold text-base text-foreground leading-tight">
      {name}
    </h4>

    <p className="text-sm text-muted-foreground mt-1">
      {code}
    </p>

    <div className="flex items-center gap-2 mt-3">
      <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
      
      <p className="text-sm text-muted-foreground truncate">
        {city}, {area}
      </p>

    </div>

  </CardContent>

</Card>
  )
}
