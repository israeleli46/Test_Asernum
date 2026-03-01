"use client"


import { PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Rendu monnaie", value: 6000 },
  { name: "Paiement course", value: 3364 },
]

const COLORS = ["#E30613", "#6BAF45"]

export default function MagStatistiqueCard() {

const total = data.reduce((a, b) => a + b.value, 0)

return (

<div className="flex items-center justify-between pb-0 mb-2 w-full gap-15 bg-transparent">

  {/* Donut */}
  <div className="relative bg-transparent">
    <PieChart width={250} height={250}>
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
  </div>

  {/* Légende */}
  <div className="flex flex-col gap-4 bg-transparent">

    <div className="flex items-center gap-2 bg-transparent">
      <div className="w-3 h-3 bg-red-600 rounded-full"/>
      Rendu monnaie
    </div>

    <div className="flex items-center gap-2 bg-transparent">
      <div className="w-3 h-3 bg-green-500 rounded-full"/>
      Paiement course
    </div>

  </div>

</div>

)
}