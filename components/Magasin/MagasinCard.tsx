import { Store, ArrowUpRight, MapPin } from "lucide-react"
import { Card } from "../ui/card"
import Link from "next/link"

type Props = {
  id:number
  name: string
  code: string
  city: string
  active?: boolean
}

export default function MagasinCard({id, name, code, city, active }: Props) 
{

  return (
      <Link href={`/magasin/${id}`}>
      <Card
      className={`
      mt-2 p-4 rounded-4xl w-[400px] h-[250px] border-0 transition-all cursor-pointer
      
      ${active
        ? "bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg"
        : "bg-white hover:bg-gradient-to-br hover:from-red-500 hover:to-red-600 hover:text-white hover:shadow-lg"
      }
      `}
    >

          {/* Icon */}
          <div className="flex items-center justify-between mb-6 bg-transparent">

            <div className={`w-10 h-10 rounded-xl flex items-center justify-center
              ${active ? "bg-white/20" : "bg-gray-100"}
            `}>
              <Store className={`w-5 h-5 ${active ? "text-white" : "text-gray-500"}`} />
            </div>

            <ArrowUpRight className={`w-5 h-5 ${active ? "text-white" : "text-red-500"}`} />
          </div>

          {/* Infos */}
            <h3 className="font-semibold text-lg bg-transparent">
                {name}
            </h3>

            <p className={`text-sm ${active ? "text-white/80" : "text-gray-500"} bg-transparent`}>
                {code}
            </p>

            <div className={`flex items-center bg-transparent gap-2 mt-2 text-sm ${active ? "text-white/80" : "text-gray-500"}`}>
                <MapPin className="w-4 h-4 " />
                {city}
            </div>

        </Card>
        </Link>
  )
}