"use client";
import Hero from "./components/hero"
import About from "./components/about"
import Contact from "./components/contact"
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home(){
  useEffect(()=>{
    AOS.init(
      {
        easing:"ease-out-back",
        duration:1200,
        delay:100,
        mirror:true,
        anchorPlacement:"bottom-bottom",
        offset:160,
      });
      AOS.refresh()
  },[]);

  return(
   <div>
  <Hero/>
 
  <About/>
  <Contact/> 
 
    
   </div>
  )
}