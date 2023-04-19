'use client';
import React from 'react'
import Hero from '../Hero';
import GetStarted from '../GetStarted';
import {motion, Variants} from 'framer-motion';

function AnimatedHero({homepage}:{homepage:boolean}) {
    const divVariant:Variants ={
        hidden:{
            opacity:0,
        },
        visible:{
            opacity:1,
            transition:{
               duration:0.25,
                ease:"easeIn",
                
            }
        }
    }
    let sentence:string = "Unlimited Movies, Tv shows and more.";
    const h1Variant:Variants ={
        hidden:{
            opacity:0,
        }, visible:{
            opacity:1,
           
            transition:{
                duration:0.25,
                staggerChildren:0.35,
                delayChildren:0.25,
                
            }
        }
    }
    const spanVariant:Variants ={
        hidden:{
            y:"-150",
            opacity:0,
            x:"-100",
        },
        visible:{
            opacity:1,
            y:["-100","-80","-195","-185","-165","-50","30", "20","10","0"],
            x:"0",
           
            transition:{
                type:"spring",
                ease:[0.73,0.24,0.1,0.52],
                duration:0.55,  
                damping:5
            }
        }
    }
  return (
    <Hero homepage>
        <motion.div variants={divVariant} initial={"hidden"}  animate={"visible"} className="text-center top-[50%] left-[50%] mt-[5%] absolute -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-6 z-[8] py-6 w-[90%]">
          <motion.h1 variants={h1Variant}  className="text-4xl lg:text-5xl font-bold mb-3">
           {sentence.split(" ").map((word:string, index:number)=> <motion.span variants={spanVariant} key={index}>{word + " "}</motion.span>)}
          </motion.h1>
          <h2 className="text-xl font-semibold lg:text-2xl mb-3">
            Watch anywhere. Cancel anytime.
          </h2>
          <GetStarted />
        </motion.div>
      </Hero>
  )
}

export default AnimatedHero