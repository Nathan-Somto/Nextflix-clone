"use client";
import { IMovie, ITvOriginals, title } from "@/app/types";
import { BASE_IMG_URL } from "@/app/providers/common";
import React,{useRef, useState} from "react";
import Image from "next/image";
import {Carousel} from  'react-responsive-carousel';
type props = {
  data: IMovie[] | ITvOriginals[];
  title: title;
  isLargeRow: boolean;
};
function Row({ data, title, isLargeRow }: props): JSX.Element {
  const rowRef = useRef<HTMLElement>(null);
  const[show, setShow] = useState(false);
  function handleScrollClick(direction:string){
  
    setShow(true);
    if(rowRef.current!== null){
const  {scrollLeft, clientWidth} = rowRef.current; 
console.log(clientWidth);
console.log(`minus: ${scrollLeft - clientWidth}`);
console.log(`add: ${scrollLeft + clientWidth}`);
const scroll = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
rowRef.current.scroll({left:scroll,behavior:'smooth'});
    }
  }
  return (
    <div className="relative mt-6">
     <h1 className="text-3xl font-semibold ">{title}</h1>
     <div className={`text-[1.8rem] bg-[rgb(0,0,0)] text-[#fff] top-0 left-[5px] h-12 flex items-center justify-center rounded-md w-12 p-4 absolute bottom-0 m-auto cursor-pointer z-[50] hover:opacity-50 ${!show ? 'hidden':""}`}
      onClick={()=>handleScrollClick('left')}
     >
      {'<'}
     </div>
    <section ref={rowRef} className= {`mt-[2rem] text ml-[1.25rem] overflow-scroll relative text-[#fff] flex row ${isLargeRow? 'h-[350px]':'h-[250px]'} min-w-full`}>
     
    

  {data && data.map((item, index) => (
          /* check is done in case of a dead link  */ <div
            key={item.id}
           
            className={`p-[1.25rem] relative hover:scale-110  rounded-md overflow-hidden bg-cover bg-center flex-shrink-0 mr-[0.825rem] transition-all duration-400   ${
              isLargeRow
                ? "max-w-[200px] h-[300px] min-w-[150px] w-[30%] max-h-[300px]"
                : "h-[200px] w-[200px]"
            }`}
          >
           <Image alt={item.name} src={`${(isLargeRow? BASE_IMG_URL + item.poster_path: BASE_IMG_URL + item.backdrop_path)}`} fill={true}/>
          </div>
        ))}

    
    </section>
    <div className="text-[1.8rem] bg-[rgb(0,0,0)] text-[#fff] top-0 right-[5px] absolute bottom-0 m-auto h-12 w-12 items-center flex justify-center rounded-md p-4 cursor-pointer z-[50] hover:opacity-50" onClick={()=>handleScrollClick('right')}>
  {'>'}
</div>
    </div>
  );
}

export default Row;
