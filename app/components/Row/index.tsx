"use client";
import { IMovie, ITvOriginals, media_type, title } from "@/app/types";
import React,{useRef, useState} from "react";
import {motion} from 'framer-motion';
import Thumbnail from "../Thumbnail";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";



type props = {
  data: IMovie[] | ITvOriginals[];
  title: title;
  isLargeRow: boolean;
  media_type:media_type;
};

function Row({ data, title, isLargeRow ,media_type}: props): JSX.Element {
  const rowRef = useRef<HTMLElement>(null);
  const[show, setShow] = useState(false);
  function handleScrollClick(direction:string){
  
    setShow(true);
    if(rowRef.current!== null){
const  {scrollLeft, clientWidth} = rowRef.current; 
const scroll = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
rowRef.current.scroll({left:scroll,behavior:'smooth'});
    }
  }
  return (
    <div className="relative mt-2">
     <h1 className="text-3xl font-semibold ">{title}</h1>
     <motion.div initial={{x:'-100%', backgroundColor:'#fff'}} whileInView={{x:'0',backgroundColor:"#B9090B"}} transition={{type:"spring", duration:0.35, stiffness:20}} className="w-[10%] min-w-[100px] h-[2px]  mt-2"></motion.div>
     <div className={` bg-[rgb(0,0,0)] text-[#fff] top-0 left-[5px] h-12 flex items-center justify-center rounded-md w-12 p-4 absolute bottom-0 m-auto cursor-pointer z-[500] hover:opacity-50 ${!show ? 'hidden':""}`}
      onClick={()=>handleScrollClick('left')}
     >
      <span>
      <FaChevronLeft size={'18'} color={'#fff'} />
      </span>
     </div>
    <section ref={rowRef} className= {`mt-[2rem] text ml-[1.25rem] overflow-scroll relative text-[#fff] flex row ${isLargeRow? 'h-[350px]':'h-[250px]'} min-w-full`}>
     
    

  {data && data.map((item:ITvOriginals | IMovie, index:number) => (
          <Thumbnail isLarge ={isLargeRow} data={item}   key={item.id} media_type={media_type}/>
        ))}

    
    </section>
    <div className="bg-[rgb(0,0,0)] text-[#fff] top-0 right-[5px] absolute bottom-0 m-auto h-12 w-12 items-center flex justify-center rounded-md p-4 cursor-pointer z-[500] hover:opacity-50" onClick={()=>handleScrollClick('right')}>
     <FaChevronRight size={'18'} color={'#fff'} />
</div>
    </div>
  );
}

export default Row;
