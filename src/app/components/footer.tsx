import React from 'react'
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
<footer className="p-1 body-font bg-red-800 rounded-2xl">
  <div className="container px-3 py-2 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="logo.png" 
      width={30}
       height={20} 
       alt='logo'
       className='mb-24 rounded-full'/>
      <span className="ml-4 mb-2 text-3xl  font-bold  text-white ">About
        <p className='text-sm font-medium mt-4'>
          We are deicating to providing you <br></br> with exceptional service that <br></br> enhance your living experience <br></br> and reflect your unique lifestyles
        </p>
        </span>
    </a>
    
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-4 sm:border-gray-200 sm:py-2 sm:mt-0  font-bold font-serif ">
      Quick Links 
      <br></br>
     <Link className='hover:text-black' href={'#Hero'}>Home</Link>
     <br></br>
      <Link className='hover:text-black' href={'#About'}>About</Link>
      <br></br>
      <Link className='hover:text-black' href={'#Contact'}>ContactUs</Link>
    </p>
   
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
      <Link href={"https://github.com/SaimaAmjad786/cli-number-guessing"} className="text-gray-700 ">
      <FaGithub className='text-3xl mr-6 text-white' />
      </Link>
      <Link href={"https://github.com/SaimaAmjad786/cli-number-guessing"} className="text-gray-900 mr-6">
      <SiVercel className='text-3xl' />
      </Link>
      <Link href={"https://github.com/SaimaAmjad786/cli-number-guessing"} className="text-gray-900 mr-6">
      <FaLinkedin  className='text-3xl text-blue-400' />
      </Link>
      
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer