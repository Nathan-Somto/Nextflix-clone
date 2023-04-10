'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Variants, motion} from 'framer-motion';
import { authContext, useAuth } from '@/app/context/AuthContext';


function Nav() {
  const {user,logOut} = useAuth() as authContext;
    /** 
     *  @todo: add the functionality for sign in
     * create the auth provider context

     */
     const navVariants:Variants ={
      hidden:{
       opacity:0,
       scale:0.5
       
      },
      visible:{
       opacity:1,
       scale:0.5,
        
        transition:{
          type:"spring",
          bounce:0.6,
          duration:0.2,
          delayChildren:0.1,
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
            duration:0.25
          }
        }
      }
  return (
   <motion.nav variants={navVariants} initial={"hidden"} animate={"visible"} className='flex h-16 w-[80%] mx-auto justify-between items-center  bg-[rgba(0,0,0,0)] z-[10] relative top-0'>
   <Link href='/'><Image src={'/logo.png'} alt={'netflix logo'} height={150} width={150} /></Link>
   <motion.div variants={divVariants}>

   {user ? <button className='btn-red' onClick={logOut}>Sign out</button>:<Link href='/signIn' className='btn-red'>Sign in</Link>}
   </motion.div> 
   
   </motion.nav>
  )
}

export default Nav