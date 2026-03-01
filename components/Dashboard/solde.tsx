"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function SoldeCard() {
  const [showBalance, setShowBalance] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[url('/bird_auchan.jpg')] text-white p-6 flex flex-col justify-between min-h-[200px]">
 
     

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white">Solde globale</h3>
          <span className="inline-block w-2 h-2 rounded-full bg-[#4ADE80]" />
        </div>
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          {showBalance ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
          <span>{"Touchez l'oeil pour afficher le solde"}</span>
        </button>
      </div>

      <div className="relative z-10 mt-auto">
        <div className="flex gap-1.5 mb-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-white"
            />
          ))}
        </div>
        <p className="text-2xl font-bold text-white">
          {showBalance ? "1 250 000" : "••••••"}{" "}
          <span className="text-lg font-semibold text-white">FCFA</span>
        </p>
      </div>
    </div>
  )
}
