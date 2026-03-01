"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCcw, Calendar, Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import TransactionCard from "./TransactionCard"
import CaissierCard from "./CaissierCard"

export default function TransactionsCaissiersPanel() {
  return (

<Card className="rounded-2xl border-0 shadow-none bg-transparent">

<CardContent className="p-3 space-y-2 bg-transparent">

{/* Tabs */}
<Tabs defaultValue="transactions" className="bg-transparent">

{/* Tabs boutons */}
<TabsList className="bg-gray-200 rounded-full p-1 ">

<TabsTrigger
value="transactions"
className="
rounded-full
px-4 py-2
data-[state=active]:bg-white
data-[state=active]:shadow-sm
text-xl
"
>
Transactions
</TabsTrigger>

<TabsTrigger
value="caissiers"
className="
rounded-full
px-4 py-2
data-[state=active]:bg-white
data-[state=active]:shadow-sm
text-xl
"
>
Caissiers
</TabsTrigger>

</TabsList>

<TransactionCard/>
<CaissierCard/>





</Tabs>

</CardContent>

</Card>

  )
}