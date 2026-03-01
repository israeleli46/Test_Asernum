import { TabsContent } from '../ui/tabs'
import { Calendar, RefreshCcw, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"


const TransactionCard = () => {
  return (
    
       
<TabsContent value="transactions" className="mt-3 bg-transparent">

    <div className="flex items-center justify-between bg-transparent ">

<h2 className="text-4xl font-semibold bg-transparent">
Transactions
</h2>


<div className="flex items-center gap-3 bg-transparent">

{/* Search */}

<div className="relative bg-transparent">

<Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"/>

<Input
placeholder="Type, point de vente, client, n° dossier..."
className="pl-9 rounded-full bg-gray-200 border-0 w-[260px]"
/>

</div>


{/* Filters */}

<Button variant="secondary" className="rounded-full ">
Tous
</Button>

<Button variant="secondary" className="rounded-full bg-gray-200">
Rendu monnaie
</Button>

<Button variant="secondary" className="rounded-full bg-gray-200">
Paiement courses
</Button>


{/* Date */}

<Button variant="secondary" className="rounded-full bg-gray-200 flex gap-2">

<Calendar size={16}/>

12/08/2025 - 12/08/2025

</Button>


{/* Refresh */}

<Button variant="ghost" size="icon">

<RefreshCcw size={18}/>

</Button>


{/* Export */}

<Button className="bg-red-600 hover:bg-red-700 rounded-xl text-white p-6 mr-3">

Exporter

</Button>


</div>

</div>


{/* Table */}

<div className="bg-white rounded-xl overflow-hidden">

<Table>

<TableHeader className="bg-gray-100 text-slate-500 border-0">

<TableRow className="">

<TableHead>ID Transaction</TableHead>

<TableHead>Type de transaction</TableHead>

<TableHead>Montant</TableHead>

<TableHead>Client</TableHead>

<TableHead>Date</TableHead>

</TableRow>

</TableHeader>


<TableBody className="bg-transparent">

{Array.from({ length: 10 }).map((_, i) => (

<TableRow key={i} className="border-0">

<TableCell>10836745693</TableCell>

<TableCell className="font-medium">
Paiement course
</TableCell>

<TableCell>
+2500 FCFA
</TableCell>

<TableCell>
+225 07 63 32 22 32
</TableCell>

<TableCell>
20/01/2025, 10:20
</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</div>


</TabsContent>
  
  )
}

export default TransactionCard