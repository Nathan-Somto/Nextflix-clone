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
               
                ease:"easeIn",
                
            }
        }
    }
    let sentence:string = "Unlimited Movies, Tv shows and more.";
    const h1Variant:Variants ={
        hidden:{
            opacity:0,
            textShadow:'0px 0pc 80px #fff, 0px 0px 20px #fff 0px 0px 40px #fff',
        }, visible:{
            opacity:1,
            textShadow:'none',
            transition:{
                staggerChildren:0.3,
                delayChildren:0.3,
                
            }
        }
    }
    const spanVariant:Variants ={
        hidden:{
            opacity:0,
            y:"-80",
            x:"-100"
        },
        visible:{
            opacity:1,
            y:["-75","-60","-85","-65","-35","-20","0"],
            x:"0",
            transition:{
                ease:[0.53,0.34,0.21,0.12],
                bounce:0.52,
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