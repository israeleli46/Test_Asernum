import MagasinCard from "./MagasinCard"

const magasins = Array(20).fill({
name:"Angré Djibi 1",
code:"M0001",
city:"Abidjan, Cocody"
})

export default function MagasinsGrid(){

return(

<div className="grid grid-cols-5 gap-6">

{magasins.map((magasin,index)=>(
    
<MagasinCard
        key={index}  
        id={magasin.id}
        name={magasin.name}
        code={magasin.code}
        city={magasin.city} />

))}

</div>

)

}