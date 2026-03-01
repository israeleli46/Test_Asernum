import { TransacRecents } from "@/app/Constants/TransacsRecent"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { Menu, MoreHorizontal } from "lucide-react"

const toutesTransac = () => {
  return (
    <div className="w-3/5 ">
     <Card className="flex h-[600px] w-full bg-white border-0 rounded-4xl p-4">

  <div className=" flex justify-end  w-1/4 ml-auto mt-3 mr-3 border-0 bg-transparent">
   <Button
          variant="outline"
          size="sm"
          className="text-[#E02020] 
          border-[#E02020]
           hover:bg-[#E02020]/5
           
           hover:text-[#E02020]
            cursor-pointer rounded-lg text-xs font-medium "
        >
          {"Toutes les transactions >"}
        </Button>
  </div>
  
<div className="grid grid-cols-6 bg-gray-100 py-2 rounded-xl pl-2 text-sm font-light ">

<div>Type de transaction</div>
<div>Magasin</div>
<div>Montant</div>
<div>Client</div>
<div>Date</div>
<div></div>

</div>


{/* Loop */}
{TransacRecents.map((t, index) => (

<div
key={index}
className="grid grid-cols-6 p-4 items-center bg-transparent"
>

<div className="font-bold bg-transparent">
{t.TypedeTransaction}
</div>

<div className="bg-transparent font-semibold">
{t.magasin}
</div>

<div
className={` bg-transparent font-semibold ${
t.montant > 0
? "text-green-600"
: "text-red-500"
}`}
>

{t.montant > 0 ? "+" : ""}
{t.montant} FCFA

</div>

<div className="bg-transparent font-medium">
{t.Client}
</div>

<div className="bg-transparent font-semibold">
{t.date}
</div>

<div className=" flex justify-end text-right bg-transparent">
  <Menu className="cursor-pointer bg-transparent" />

</div>

</div>

))}


</Card>
      
    </div>
  )
}

export default toutesTransac