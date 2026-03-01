import React from 'react'
import { Card, CardHeader, CardTitle } from '../ui/card'
import StatistiqueCard from './graph'

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const Statistic = () => {
  return (
    <div className='w-1/5'>
 <Card className='flex flex-col h-[600px] bg-white border-0 rounded-4xl'>
   <CardHeader className="flex flex-row justify-between items-center bg-transparent">

      <CardTitle className="text-2xl font-bold bg-transparent">
      Statistiques
      </CardTitle>


            <Select>

              <SelectTrigger className="rounded-full px-4 py-2 text-sm shadow bg-[#F4F4F7]">
              <SelectValue placeholder="Choisir une période" />
              </SelectTrigger>
              <SelectContent className='border-0'>
              <SelectItem value={'Aujourdhui'}>Aujourd'hui</SelectItem>
              <SelectItem value={'les 7 derniers jours'}>les 7 derniers jours </SelectItem>
              <SelectItem value={'les 30 derniers jours'}>les 30 derniers jours</SelectItem>
              <SelectItem value={'Cette année'}>Cette année</SelectItem>

              </SelectContent>                                 




            </Select>

    </CardHeader>

<StatistiqueCard />
             
        </Card>
    </div>
  )
}

export default Statistic