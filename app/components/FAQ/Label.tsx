'use client';

import React from 'react'
import  {AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
type Open ={
    [index:string]:boolean
  }
type props={
    open:Open;
    heading:string;
    index:string;
    setOpen:React.Dispatch<React.SetStateAction<Open>>
}
function Label({index, open, setOpen,heading}:props) {
    function closeOpened(){
        let opened = Object.keys(open).filter(item=> open[item]);
        if(opened.length === 0) return open;
        let closed:Open ={};
     opened.map((item=>(closed[item]=!open[item]) ));
      return closed;
     
    }
    function openBody(index:string)
    {
     
        setOpen({...closeOpened(),[index]:true});
    }
    function closeBody(index:string)
    {
      setOpen({ ...open,[index]:false});
    }
  return (
    <div  className='flex w-full mx-auto px-3 py-5 justify-between items-center bg-mid-gray mb-4 hover:bg-[rgba(195,191,191,0.75)] cursor-pointer'>
        <h2 className='text-xl lg:text-2xl font-semibold text-[#fff]'>{heading}</h2>
       {open[index]?<AiOutlineClose color={'#fff'} size={50} onClick={()=>closeBody(index)}/>
       :  <AiOutlinePlus color='#fff' size={50} onClick={()=>openBody(index)}/>
       } 
      
    </div>
  )
}

export default Label