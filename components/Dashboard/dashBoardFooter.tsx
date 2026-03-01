import React from 'react'
import { Card } from '../ui/card'
import Statistic from './statistic'
import ToutesTransac from './toutesTransac'

const DashBoardFooter = () => {
  return (
     <div className='flex gap-15 w-full justify-center h-[650px] pt-13'>
        
            <ToutesTransac/>
            <Statistic/>       
        
        

    </div>
  )
}

export default DashBoardFooter