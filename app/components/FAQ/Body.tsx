'use client';
import React from 'react'
type props={
    open:{[index:string]:boolean}
    para:string;
    index:string;
}
function Body({open,para,index}:props) {
    let otherHalf = '';
    let words =para.split(' ');
    if(words.length >= 30 ) 
    {
        para = words.slice(0,(words.length)/2).join(' ');
        otherHalf = words.slice((words.length)/2, words.length).join(' ');
    }
  return (
   <>
   {
    open[index] && <div className='bg-mid-gray py-6 max-h-[75rem] font-semibold w-full p-6 mb-5 mt-[-0.95rem] md:text-[1.2rem] lg:text-[1.5rem] transition-all duration-200 ease-in'>
        <p>{para}</p>
        {
        otherHalf
        && 
        <>
        <br className="h-[10px]"/>
        <p>{otherHalf}</p>
        </>
        }
    </div>
   }
   </>
  )
}

export default Body