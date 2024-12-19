import React from 'react'
import FigmaLittle from "../../../public/figma-icon-one-color.svg";
import NextJs from '../../../public/nextjs.svg';
import Tailwind from '../../../public/tailwind.svg';
import Vercel from '../../../public/vercel.svg';
import Stripe from '../../../public/stripe-3.svg';
import MongoDB from '../../../public/mongodb-icon-1.svg';
import Laravel from '../../../public/laravel-wordmark-1.svg'
import Image from 'next/image';

const MarqueeTech = () => {
  return (
     <div className="absolute bottom-4 left-0 w-full overflow-hidden">
        <div className="flex animate-marquee-logos">
        <Image src={NextJs} alt="Terminal Logo" width={80} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={Tailwind} alt="Figma Logo" width={80} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={FigmaLittle} alt="Figma Logo" width={20} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={Vercel} alt="Database Logo" width={80} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          
          <div className="flex items-center ">
          <Image src={MongoDB} alt="Database Logo" width={30} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }} />
         <span className="font-rethink font-bold ml-[-20px] mr-[50px]">MongoDB</span> 
          </div>
          <Image src={Stripe} alt="Terminal Logo" width={50} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={Laravel} alt="Terminal Logo" width={50} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={NextJs} alt="Terminal Logo" width={80} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={Tailwind} alt="Figma Logo" width={80} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={FigmaLittle} alt="Figma Logo" width={20} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={Vercel} alt="Database Logo" width={80} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          
          <div className="flex items-center ">
          <Image src={MongoDB} alt="Database Logo" width={30} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }} />
         <span className="font-rethink font-bold ml-[-20px] mr-[50px]">MongoDB</span> 
          </div>
          <Image src={Stripe} alt="Terminal Logo" width={50} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
          <Image src={Laravel} alt="Terminal Logo" width={50} height={80} className="mx-4" style={{ filter: "brightness(0) invert(1)" }}/>
        </div>
        </div>
  )
}

export default MarqueeTech