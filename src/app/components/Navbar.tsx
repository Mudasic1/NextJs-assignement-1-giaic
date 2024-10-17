import Link from "next/link"

const Navbar = () => {
  return (

    // Navigation Items 
    <div className="bg-green-400 h-[100px] items-center justify-between flex">
      <h1 className="text-4xl text-white p-5 font-sans font-bold">My website</h1>

{/* Navigation Links */}

      <div className="text-xl font-bold p-4 space-x-6">
        
        <Link href={'/'} className=" hover:bg-green-600 hover:rounded-md hover:text-white hover:border-2  p-2">Home</Link>
        <Link href={'./../about'}  className=" hover:bg-green-600 hover:rounded-md hover:text-white hover:border-2  p-2">About</Link>
        <Link href={'./../projects'}  className=" hover:bg-green-600 hover:rounded-md hover:text-white hover:border-2  p-2">Projects</Link>
        <Link href={'./../contact'}  className=" hover:bg-green-600 hover:rounded-md hover:text-white hover:border-2  p-2">Contact</Link>
        <Link href={'./../blog'}  className=" hover:bg-green-600 hover:rounded-md hover:text-white hover:border-2  p-2">Blog</Link>

      </div>
    </div>
  )
}

export default Navbar
