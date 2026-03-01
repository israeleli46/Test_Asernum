"use client"
import { CircleUser, Menu, X } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";


const Navbar = () => {


  const navItems =
       [

    { label: " Tableau de bord", href: "/dashboard" },
    { label: "Magasins", href: "/magasin" },
    { label: "Transactions", href: "/transaction" },
    { label: "Clients", href: "/client" },
        { label: "Gestions", href: "/gestion" },
    { label: "Statistiques", href: "/statistique" },

      ];
          



 const pathname = usePathname();
  const linkBase =
    "font-bold px-4 py-2  rounded-xl transition";
  const activeLink =
    "bg-red-600 text-white hover:";
  const inactiveLink =
    "bg-transparent text-gray-900 hover:text-black";



 
  return (
   



    <header className="w-full bg-[#F4F4F7] p-6">

      <div className="max-w-7xl mx-auto bg-white rounded-full px-3 py-2 flex items-center justify-between shadow-sm">

       <div className="font-bold text-xl text-festival-green bg-transparent">
            <Link href="/" >
            <div className="bg-white " children={<Image src="/auchan.png" alt="Auchan" width={92} height={5}  />}  
            />
            </Link>
       </div>

        {/* Menu */}
        <nav className="flex items-center bg-transparent gap-10 text-sm">
            
        {navItems.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={`${linkBase} ${
        pathname === item.href
          ? activeLink
          : inactiveLink
      }`}
    >
      {item.label}
    </Link>
  ))}

        </nav>


        {/* Profil */}
        <div className="w-13 h-13 bg-gray-200 rounded-full flex items-center justify-center opacity-40 mx-2">
          <CircleUser className="cursor-pointer"/>
        </div>

      </div>

    </header>
  );
}
  


export default Navbar;