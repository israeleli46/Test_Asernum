'use client'
import { useState } from 'react'
import { CardDescription, CardHeader, CardTitle ,Card,CardContent} from '../ui/card'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'
import { StoreCard } from './store-card'

const stores = [
  { name: "Angre Djibi 1", code: "M0061", city: "Abidjan", area: "Cocody" },
  { name: "Angre Djibi 1", code: "M0061", city: "Abidjan", area: "Cocody" },
  { name: "Angre Djibi 1", code: "M0061", city: "Abidjan", area: "Cocody" },
  { name: "Angre Djibi 1", code: "M0061", city: "Abidjan", area: "Cocody" },
  { name: "Angre Djibi 1", code: "M0061", city: "Abidjan", area: "Cocody" },
]

const LineSoldeGlobal = () => {
 const [showBalance, setShowBalance] = useState(false)
  
  return (
   <div className='flex gap-15 w-full justify-center'>

  {/* CARD IMAGE */}
  <div className='w-1/5 '>

   
  <Card
    className="
    h-[400px] w-full pl-2
    border-0
    rounded-4xl
    overflow-hidden
    bg-[url('/bird_auchan.jpg')]
    bg-cover bg-center
    "
  >

   
      <CardHeader className="bg-transparent text-3xl font-bold text-white ">
       <div className="flex items-center justify-between bg-transparent">

    <CardTitle className="text-3xl font-bold bg-transparent">
      Solde Globale
     
    </CardTitle>

    <Button
       onClick={() => setShowBalance(!showBalance)}
      className="p-2 rounded-full bg-black/30 hover:bg-black/50 transition cursor-pointer"
    >
        {showBalance ? (
            <EyeOff className="w-4 h-4 bg-transparent" size={22}/>
          ) : (
            <Eye className="w-4 h-4 bg-transparent" size={22}/>
          )}
    </Button>

      </div>
      </CardHeader>
       <span className='pl-5 text-sm bg-transparent text-gray-300'> Toucher l'oeil pour afficher le solde </span>
     <div className="relative z-10 mt-auto ml-6 bg-transparent">
        <p className="text-5xl font-bold text-white bg-transparent">
          {showBalance ? "1 250 000" : "••••••"}{" "}
          <span className="text-lg font-semibold text-white bg-transparent">FCFA</span>
        </p>
      </div>   

      <CardContent />


  </Card>

  </div>


  {/* CARD ROSE */}
  <div className='w-3/5'>

    <Card className="bg-[#FFE8E8]
     border-transparent
      rounded-4xl
       h-[400px]
        overflow-hidden">

      <CardHeader className="bg-transparent">
          <div className='flex inline-flex justify-between  bg-transparent'>
        <CardTitle className='bg-transparent text-2xl font-bold text-gray-600'>
          Les magasins qui transactent le plus 
        </CardTitle>
        <CardTitle className='bg-transparent border-[#E02020]'>
          <Button
          variant="outline"
          size="sm"
          className="text-[#E02020] border-[#E02020] hover:bg-[#E02020]/5 hover:text-[#E02020] cursor-pointer rounded-lg text-xs font-medium "
        >
          {"Tous les magasins >"}
        </Button>
        </CardTitle>

          </div>
             
      </CardHeader>

      <CardContent className='bg-transparent'>
        <div className="flex gap-5  scrollbar-hide bg-transparent pt-7 overflow-hidden">
        {stores.map((store, index) => (
          <StoreCard  key={index} {...store} />
        ))}
      </div>
      </CardContent>
  
    </Card>

  </div>

</div>
  )
}

export default LineSoldeGlobal