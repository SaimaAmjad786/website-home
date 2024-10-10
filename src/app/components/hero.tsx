import React from 'react'
import Image from "next/image"
function Hero() {
  return (
    <div id='Hero'>
      <section className="text-gray-900 body-font -mt-[90px] ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl ml-8 mb-4 font-bold font-serif text-red-800 mt-8">
      Home Agency
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed font-bold ml-7">
        Digital Silk is a full-service agency comprise of leading web designers. from around of the global .Wheather building a website from scratch or redesignings your current digital presence our web design services includes.
      </p>
      <div className="flex justify-center">
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 -mt-[30px]">
      <Image  src={'/image2.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800"
        alt="hero"
       width={400}
       height={100}
      />
    </div>
    </div>
    </section>

    {/* Images  */}
      <div>
<h1 className='flex justify-center font-bold font-serif text-red-800 text-3xl mb-6'>Watch Now</h1>
<div className='flex  justify-center gap-3 mr-5 ml-5 '> 
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image data-aos="zoom-in-up" src={'/image3.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800 mb-5"
        alt="hero"
       width={300}
       height={100}
      />
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image data-aos="zoom-in-up" src={'/image4.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800 "
        alt="hero"
       width={300}
       height={100}
      />
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image data-aos="zoom-in-up" src={'/image5.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800 "
        alt="hero"
       width={300}
       height={100}
      />
    </div>
    </div> 
    
    {/* Images 2 */}
    <div className='flex  justify-center gap-3 mr-5 ml-5 mt-6 '> 
<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image data-aos="zoom-in-up" src={'/image6.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800 "
        alt="hero"
       width={320}
       height={100}
      />
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image data-aos="zoom-in-up" src={'/houseimg.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800 "
        alt="hero"
       width={320}
       height={100}
      />
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image data-aos="zoom-in-up" src={'/image8.jpg'}
        className="object-cover object-center rounded-lg border-4 border-red-800"
        alt="hero"
       width={300}
       height={100}
      />
    </div>
</div>
    </div>  
</div>  

  )
}
export default Hero