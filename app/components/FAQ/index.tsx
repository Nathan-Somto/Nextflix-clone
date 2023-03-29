'use client';
import React, { useState } from 'react'
import Label from './Label';
import Body from './Body';
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
    <section className={'w-[80%] mx-auto'}>
      <h1 className="text-[#fff] font-bold text-3xl mb-6">Frequently Asked Questions</h1>
      {
      data.map((item,index)=>(
      <div key={index}>
      <Label index={index.toString()} setOpen={setOpen} heading={item.heading} open={open}/>
      <Body open={open} para={item.para} index={index.toString()}/>
      </div>))
      }</section>
  )
}

export default FAQ