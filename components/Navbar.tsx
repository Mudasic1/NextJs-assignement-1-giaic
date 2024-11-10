'use client'

import Link from "next/link"
import { NavItems } from './data';

const Navbar = () => {
  return (
    <>
    <div className="font-Inter absolute flex top-0 h-[100px] items-center xl:pl-[100px] xl:pr-[100px] md:gap-[50px] sm:gap-[35px] xsm:gap-[30px] bg-slate-800 xl:w-[1500px] sm:border sm:border-white sm:w-[500px]  sm:pl-[50px] sm:justify-center sm:left-[100px] sm:top-1 sm:overflow-x-hidden lg:border-none sm:pr-[50px] xl:ml-[200px] xl:border xl:border-white">
      {/* NavItems */}
        {NavItems.map((Items)=>(
          <Link href={Items.Link} key={Items.id} className="hover:text-yellow-300  text-[20px]">{Items.title}</Link>
        ))}
      <div className="absolute top-[10px] sm:left-[600px] flex md:left-[1000px] lg:left-[1050px] xl:left-[1650px] xsm:left-[500px] items-center">
      <Link href={"#"} className="bg-green-600 border-[2px] rounded-md pt-[10px] pb-[10px] pl-[10px] pr-[10px] sm:hidden">GITHUB</Link>
    </div>
    </div>
   
    </>
  )
}

export default Navbar
