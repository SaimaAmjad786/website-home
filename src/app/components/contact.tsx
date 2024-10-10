import React from 'react'
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import {IoLogoVercel} from 'react-icons/io5'
import { FaLinkedin } from "react-icons/fa";
function Contact() {
  return (
    <div id='Contact'>
  <section className="text-gray-900 body-font relative  -mt-[190px]">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap flex-1">
    <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      
      <div className="bg-white relative flex flex-col py-6 rounded-lg ">
        <div className="lg:w-1/2 px-6">
        <h2 className="title-font  text-red-800 tracking-widest text-2xl  font-bold">
        ContactInformation
          </h2>
          <p className="mt-3 text-black font-bold">
           We are here you with any inquires. Feel free to contact us for more information
          </p>  
        </div>
         <div className="lg:w-1/2 px-6 mt-3 lg:mt-0">
          <h2 className="title-font  text-red-800 font-bold mt-7 tracking-widest text-2xl">
            Email
          </h2>
          <a className="text-gray-900 leading-relaxed mt-6 font-bold">saimaamjad@gemail.com</a> 

          <h2 className="title-font  text-red-800 font-bold mt-7 tracking-widest text-2xl">
            Address
          </h2>
          <a className="text-gray-900 leading-relaxed mt-6 font-bold">Karachi</a> 

          <h2 className="title-font  text-red-800 font-bold tracking-widest text-2xl mt-5">
            Phone
          </h2>
          <a className="leading-relaxed font-bold text-black ">123-456-7890</a>

          <h2 className="title-font  text-red-800 font-bold tracking-widest text-2xl mt-5">
            Follow Us <br></br>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
                      <Link 
                      target='blank' href={"https://github.com/SaimaAmjad786"} className="text-gray-600">
                      <FaGithub className='text-2xl mt-2' />
                      </Link>
                
                      <Link
                      target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className="ml-3 text-gray-900">
                      <IoLogoVercel className='text-2xl mt-2' />
                      </Link>
      
                      <Link
                      target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-500">
                        <FaLinkedin className='text-2xl mt-2 ' />
                      </Link>
                      </span>      
          </h2>
        </div> 
      </div>
    </div>  
    {/* ---------------------------------------------------------------------- */}
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8  md:mt-0 ">
      <h2 className="text-red-800  mb-1 font-bold font-serif text-2xl title-font flex justify-center">
       Contact Us
      </h2>
      <form action="https://formspree.io/f/mjkvbpwl" method="POST">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-lg font-bold mt-2 flex justify-center text-red-800">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Enter name'
          className="w-full bg-red-100 rounded border border-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-lg flex justify-center font-bold text-red-800">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Enter Email'
          className="w-full bg-red-100 rounded border border-gray-900 focus:border-red-600  focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-lg flex justify-center font-bold text-red-800">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder='Enter Subject'
          className="w-full bg-red-100 rounded border border-gray-900 focus:border-red-600  focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-lg font-bold flex justify-center text-red-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Enter message'
          className="w-full bg-red-100 rounded border border-gray-900 focus:border-red-600 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        required/>
      </div>
      <button className="text-white bg-red-500  font-bold border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg ">
        Send Message
      </button>
      </form>
      
    </div>
  </div>
</section>

</div>
  )
}

export default Contact