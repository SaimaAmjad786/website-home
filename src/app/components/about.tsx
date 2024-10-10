import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {IoLogoVercel} from 'react-icons/io5'
import {FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import Image from "next/image"

const About = () => {
    return (
        <div id='About'>
            <section className="text-gray-600 body-font ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                           <Image data-aos="zoom-in-up" src={"/image1.jpg"}
                            className="object-cover object-center hover:scale-110 rounded-lg  border-4 border-red-800"
                            alt="hero"
                            width={400}
                            height={100}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:flex-row flex-col md:items-start md:text-left items-center text-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-10 flex justify-center font-bold text-red-800  ">
                            About Us
                            <br className="hidden lg:inline-block" />
                        </h1>
                        
                        <p className="mb-5 mr-5 leading-relaxed ml-4 font-bold text-justify text-black">
                            Our Company mission provided you with the best prouct an services.<br></br>
                            We focus on innovation an quality.Our team is professional an experienced ,deicated to providing you with the best quality an support with us ,you will always benefits
                        </p>
                        <div className="flex justify-center">
                            
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                      <Link 
                      target='blank' href={"https://github.com/SaimaAmjad786"} className="text-gray-600">
                      <FaGithub className='text-3xl ' />
                      </Link>
                
                      <Link
                      target='blank' href={"https://vercel.com/new/saima-amjads-projects"} className="ml-3 text-gray-900">
                      <IoLogoVercel className='text-3xl mb-6' />
                      </Link>
      
                      <Link
                      target='blank' href={"https://www.linkedin.com/in/saima-amjad-2263012b6/"} className="ml-3 text-blue-500">
                        <FaLinkedin className='text-3xl ' />
                      </Link>
                      </span>      
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About