import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCcw, Calendar, Search, Edit, Edit2, RefreshCw, Menu, User, EyeOff, Eye } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { useState } from "react"

const CaissierCard = () => {
     const [showBalance, setShowBalance] = useState(false)
  return (
    
    
    
<TabsContent value="caissiers"className="mt-3 bg-transparent">

<Card className="border-0 shadow-none bg-transparent">

<CardContent className="space-y-4 p-0 bg-transparent">


<div className="flex items-center justify-between bg-transparent  ">

<h2 className="text-4xl font-semibold bg-transparent ">
Caissiers
</h2>



<div className="flex items-center gap-3 bg-transparent">

<Search className="absolute left-3 top-2.5 h-4 w-4 "/>
<Input
type="text"
placeholder=" Type, point de vente, client..."
className="
bg-gray-200
rounded-full
border-0
px-4 py-2
text-sm
w-72
outline-none
"
/>


{/* Filtres */}
<div className="flex gap-2 bg-transparent cursor-pointer">

<Button className="px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm cursor-pointer">
Tous
</Button>

<Button className="px-4 py-1 rounded-full bg-gray-200 text-sm cursor-pointer">
Actif
</Button>

<Button className="px-4 py-1 rounded-full bg-gray-200 text-sm cursor-pointer">
Bloqué
</Button>

</div>


<Button variant="secondary" className="rounded-full bg-gray-200 flex gap-2 ">

<Calendar size={16} className="cursor-pointer"/>

12/08/2025 - 12/08/2025

</Button>


{/* Refresh */}

<Button variant="ghost" size="icon">

<RefreshCcw size={18}/>

</Button>


{/* Export */}

<Button className="bg-red-600 hover:bg-red-700 rounded-xl text-white font-bold p-6 mr-3 cursor-pointer">

Ajouter un caissier

</Button>


</div>

</div>


<div className="bg-white rounded-xl overflow-hidden"> 

<Table>

<TableHeader className="bg-gray-100 text-slate-500 border-0">

<TableRow>

<TableHead>Utilisateur</TableHead>

<TableHead>Clé d'accès</TableHead>

<TableHead>Date d'affectation</TableHead>

<TableHead>Statut</TableHead>

<TableHead>Actions</TableHead>

</TableRow>

</TableHeader>


<TableBody className="bg-transparent">

{Array.from({ length: 7 }).map((_,i)=> (

<TableRow key={i} className="border-0">

<TableCell className="font-medium">
OwenJaphet01
</TableCell>


<TableCell>

<div className="flex items-center gap-2">
    <p className="text-xl font-semibold bg-transparent">
          {showBalance ? "1 2 3 4" : "• • • •"}{" "}
    
    </p>
 <Button
       onClick={() => setShowBalance(!showBalance)}
      className="p-2 rounded-full bg-red-100 hover:bg-red-300 transition cursor-pointer"
    >
        {showBalance ? (
            <EyeOff className="w-4 h-4 bg-transparent" size={10}/>
          ) : (
            <Eye className="w-4 h-4 bg-red-100" size={10}/>
          )}
    </Button>

</div>

</TableCell>


<TableCell>
20/01/2025, 10:20
</TableCell>


<TableCell>

<span className={`
px-3 py-1 rounded-md text-sm text-white
${i===6 ? "bg-gray-400" : "bg-green-500"}
`}>

{i===6 ? "Bloqué" : "Actif"}

</span>

</TableCell>


<TableCell>

<div className="flex gap-4 text-gray-500">

<Edit2 className="w-5 h-5 cursor-pointer"/>

<RefreshCw className="w-5 h-5 cursor-pointer" />

<Menu className="w-5 h-5 cursor-pointer"/>

<User className="w-5 h-5 cursor-pointer"/>

</div>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>
</div>

</CardContent>

</Card>

</TabsContent>

  )
}

export default CaissierCard