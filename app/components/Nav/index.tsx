'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Variants, motion} from 'framer-motion';


function Nav() {
    /** 
     *  @todo: add the functionality for sign in
     * create the auth provider context

     */
     const navVariants:Variants ={
      hidden:{
        y:"100%",
       
      },
      visible:{
        y:"0%",
        
        transition:{
          type:"spring",
          bounce:0.6,
          duration:0.2,
          ease:'easeIn'

        }
      }
     }
      const divVariants:Variants ={
        hidden:{
          opacity:0,
        },
        visible:{
          opacity:1,
          transition:{
            ease:"easeIn",
            duration:0.45
          }
        }
      }
  return (
   <motion.nav variants={navVariants} initial={"hidden"} animate={"visible"} className='flex h-16 w-[80%] mx-auto justify-between items-center  bg-[rgba(0,0,0,0)] z-[10] relative top-0'>
   <Link href='/'><Image src={'/logo.png'} alt={'netflix logo'} height={150} width={150} /></Link>
   <motion.div variants={divVariants}>
   <Link href='/signIn' className='  px-3 py-1 rounded-md bg-primary-red text-[#fff] cursor-pointer hover:bg-[rgb(122,18,20)] transition-all duration-200 ease-in'>sign in</Link>
   </motion.div> 
   
   </motion.nav>
  )
}

export default Nav