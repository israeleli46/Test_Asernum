import React from 'react'
import { Card } from '../ui/card'

const MagInfo = () => {
  return (
    <div className='bg-transparent'>
   <Card className="bg-transparent border-0 shadow-none">
          <div className=" w-3/5 grid grid-cols-3 gap-15  mx-auto bg-transparent">

          <div className="bg-transparent">
            <p className="text-gray-400 bg-transparent">
              Nom du magasin
            </p>

            <p className="font-bold text-xl bg-transparent">
              Angré Djibi 1
            </p>
          </div>

          <div className="bg-transparent">
            <p className="text-gray-400 bg-transparent">
              Manager
            </p>

            <p className="font-bold text-xl bg-transparent">
              Emmanuel GUIEBI
            </p>
          </div>

          <div className="bg-transparent">
            <p className="text-gray-400 bg-transparent">
              Nombre de caissiers
            </p>

            <p className="font-bold text-xl bg-transparent">
              07
            </p>
          </div>
           <div className="bg-transparent">
            <p className="text-gray-400 bg-transparent">
             Localisation
            </p>

            <p className="font-bold text-xl bg-transparent">
              Abidjan,Codody
            </p>
          </div>
           <div className="bg-transparent">
            <p className="text-gray-400 bg-transparent">
              Responsable Caisse
            </p>

            <p className="font-bold text-xl bg-transparent">
             Ismael DIOMANDE
            </p>
          </div>
           <div className="bg-transparent">
            <p className="text-gray-400 bg-transparent ">
              Nombre de transactions
            </p>

            <p className="font-bold text-xl bg-transparent">
              2407
            </p>
          </div>
                    </div>



        </Card>
        </div>
  )
}

export default MagInfo