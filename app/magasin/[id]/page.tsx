import MagInfo from "@/components/Magasin/MagInfo"
import MagStatistiqueCard from "@/components/Magasin/Statistic"
import TransactionsCaissiersPanel from "@/components/Transaction/TransacCaissierPanel"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const MagasinDetails = ({ params }: { params: { id: Number } }) => {

  const { id } = params
 

  return (
    <div className="p-3">
        <div className="flex items-center pl-28 mb-4  bg-gray-100">
        <Link href={'/magasin'}>
         <ArrowLeft
        size={40} 
        className="cursor-pointer border-1 rounded-full bg-gray-100"
        
        />
        </Link>
       
      <h1 className="pl-28 text-4xl font-bold mb-6">
       
        Détails Magasin 
      </h1>
      </div>

      <Card className="grid justify-between grid-cols-2 p-6 mx-auto rounded-3xl border-0 w-6/8 bg-white">

        <MagInfo/>
            <Card className="bg-transparent border-0 shadow-none  mx-auto w-1/5">
            <MagStatistiqueCard/>    
            </Card>
        

      </Card>
      <Card className="w-6/8 gap-15  mt-3 mx-auto bg-white border-0">
       <TransactionsCaissiersPanel/>

      </Card>

    </div>
  )
}

export default MagasinDetails