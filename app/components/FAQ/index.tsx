'use client';
import React, { useState } from 'react'
import Label from './Label';
import Body from './Body';
import {motion} from 'framer-motion';
type props = {
  data: faq[]
}
type faq = {
  heading:string;
  para:string;
}
 type Open ={
  [index:string]:boolean
}
function FAQ({data}:props) {
  const [open, setOpen] = useState<Open>({'0':false})
  return (
    <>
     <hr className={'h-[5px] border-mid-gray border-solid border-t-[6px] '}/>
    <section className={'w-[80%] mx-auto mt-9'}>
      <motion.h1 initial={{opacity:0, scale:0.5}} whileInView={{opacity:1, scale:0.5}} transition={{ease:'easeIn', delay:0.12}} className="text-[#fff] font-bold text-2xl sm:text-3xl lg:text-5xl mb-6 text-center">Frequently Asked Questions</motion.h1>
      {
      data.map((item,index)=>(
      <motion.div initial={{x:`${index%2!==0?'-100%':'100%'}`}} whileInView={{x:'0%'}} transition={{type:'spring',duration:0.3,bounce:0.12,delay:0.2}} key={index}>
      <Label index={index.toString()} setOpen={setOpen} heading={item.heading} open={open}/>
      <Body open={open} para={item.para} index={index.toString()}/>
      </motion.div>))
      }</section>
      </>
  )
}

export default FAQ