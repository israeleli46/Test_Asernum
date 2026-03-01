"use client"

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export default function MagasinsHeader() {
  return (
    
    <div className="flex items-center justify-between mb-8 mt-3">
      <div className="flex inline-flex gap-6">
          <h1 className="text-4xl font-bold">
             Magasins
          </h1>
          {/* Search */}
        <div className="relative bg-transparent">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Nom du magasin, code magasin, Commune"
            className="pl-9 pr-4 py-2 w-[320px] rounded-full bg-gray-200 outline-none border-0 "
          />
        </div>

        {/* Select */}
        <Select >
  <SelectTrigger className="w-[180px] px-4 py-2 rounded-full bg-gray-200 outline-none border-0">
    <SelectValue placeholder="Commune" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="light">Angre</SelectItem>
      <SelectItem value="dark">Cocody</SelectItem>
      <SelectItem value="system">Yopougon</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
       
      </div>
     

      {/* Recherche + filtre */}
      <div className="flex items-center gap-4">

       

        {/* Button */}
        <button className="bg-red-600 text-white px-5 py-4 rounded-lg hover:bg-red-700 transition cursor-pointer">
          + Ajouter un magasin
        </button>

      </div>
    </div>
  )
}