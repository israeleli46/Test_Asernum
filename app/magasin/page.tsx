'use client'
export const dynamic = "force-dynamic"
import MagasinsGrid from '@/components/Magasin/MagasinGrid'
import MagasinsHeader from '@/components/Magasin/MagHeader'
import { PaginationMagasins } from '@/components/Magasin/PaginationMagasins'


const Magasin = () => {
  return (
    <div className="px-10 py-6 mx-5 ">

<MagasinsHeader/>

<MagasinsGrid/>

<PaginationMagasins totalPages={4}/>

</div>

   
  )
}

export default Magasin