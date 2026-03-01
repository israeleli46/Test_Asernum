"use client"


import { PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Rendu monnaie", value: 6000 },
  { name: "Paiement course", value: 3364 },
]

const COLORS = ["#E30613", "#6BAF45"]

export default function StatistiqueCard() {

const total = data.reduce((a, b) => a + b.value, 0)

return (

<div className="flex flex-col justify-end pb-8 mb-2 h-full bg-transparent ">

<div className="flex flex-col items-center bg-transparent">

{/* Donut */}
<div className="relative overflow-hidden">

            <PieChart width={400} height={400}>

            <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={90}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            >

            {data.map((entry, index) => (

            <Cell key={index} fill={COLORS[index]} />

            ))}

            </Pie>

            </PieChart>


            {/* Texte centre */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pb-3 bg-transparent rounded-full w-full ">

            <div className="text-4xl font-bold">

            {total}

            </div>

            <div className="text-gray-500">

            Transactions

            </div>

            </div>

</div>



{/* Légende */}
<div className="flex gap-6 mt-6 ">

<div className="flex items-center gap-2 ">

<div className="w-3 h-3 bg-red-600 rounded-full "></div>

Rendu monnaie

</div>


<div className="flex items-center gap-2">

<div className="w-3 h-3 bg-green-500 rounded-full"></div>

Paiement course

</div>

</div>


</div>

</div>

)
}