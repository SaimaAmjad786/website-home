import React from 'react'
import Image from 'next/image'
import Link from "next/link"
function Navbar() {
  return (
    <div className='z-50 sticky top-0'>
        <header className="text-black body-font bg-red-800 rounded-2xl">
  <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={'/logo.png'} width={30} height={20} alt='logo' 
      className='rounded-full'
      />
      <span className="ml-3 text-lg font-bold font-serif hover:text-black text-white">Home Website</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'#Hero'} target='blank' className="mr-6 text-xl font-bold font-serif text-white hover:text-black ">Home</Link>
      <Link href={'#About'} target='blank' className="mr-6 text-xl font-bold font-serif text-white hover:text-black">About</Link>
      <Link href={'#Contact'} target='blank' className="mr-6 text-xl font-bold font-serif text-white hover:text-black">ContactUs</Link>
    </nav>
    
  </div>
</header>
    </div>
  )
}

export default Navbar