"use client";
import { IMovie, ITvOriginals, media_type, title } from "@/app/types";
import { BASE_IMG_URL } from "@/app/providers/common";
import React,{useRef, useState} from "react";
import Image from "next/image";
import genres from "@/app/data/genres";
import { findGenres, randNum } from "@/app/utils";
import { AiFillPlayCircle, AiFillPlusCircle } from "react-icons/ai";
import{FaChevronCircleDown, FaThumbsUp} from "react-icons/fa";
import {motion} from 'framer-motion';
import Link from "next/link";
import { TrailerContext, useTrailer } from "@/app/context/TrailerContext";



type props = {
  data: IMovie[] | ITvOriginals[];
  title: title;
  isLargeRow: boolean;
  media_type:media_type;
};

function Row({ data, title, isLargeRow ,media_type}: props): JSX.Element {
  const {trailer,setTrailer,setOpenModal} = useTrailer() as TrailerContext;
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
    <div className="relative mt-6">
     <h1 className="text-3xl font-semibold ">{title}</h1>
     <motion.div initial={{x:'-100%'}} whileInView={{x:'0'}}className="w-[10%] min-w-[100px] h-[2px] bg-primary-red mt-2"></motion.div>
     <div className={`text-[1.8rem] bg-[rgb(0,0,0)] text-[#fff] top-0 left-[5px] h-12 flex items-center justify-center rounded-md w-12 p-4 absolute bottom-0 m-auto cursor-pointer z-[500] hover:opacity-50 ${!show ? 'hidden':""}`}
      onClick={()=>handleScrollClick('left')}
     >
      {'<'}
     </div>
    <section ref={rowRef} className= {`mt-[2rem] text ml-[1.25rem] overflow-scroll relative text-[#fff] flex row ${isLargeRow? 'h-[350px]':'h-[250px]'} min-w-full`}>
     
    

  {data && data.map((item:ITvOriginals | IMovie, index:number) => (
          /* check is done in case of a dead link  */ <div
            key={item.id}
         
            className={`p-[1.25rem] relative movie__poster  rounded-md  bg-cover bg-center flex-shrink-0 mr-[0.825rem] transition-all duration-400   ${
              isLargeRow
                ? "max-w-[200px] h-[300px] min-w-[150px] w-[30%] max-h-[300px]"
                : "h-[200px] w-[200px]"
            }`}
          >
           <Image alt={item.name} src={`${(isLargeRow? BASE_IMG_URL + item.poster_path: BASE_IMG_URL + item.backdrop_path)}`} fill={true} className="movie__poster--image"  />
           <motion.div 
           initial={{scale:0.5,opacity:0}}
           animate={{scale:1,opacity:[0,0,0,1]}}
           transition={{
            ease: "easeIn",
            duration: 0.4,
          }}
   className={`absolute ${isLargeRow ?'h-[350px] w-[200px]':'h-[200px] w-[200px]'} top-0 z-[300]   rounded-xl  pb-2 movie__details`} >
            <div className={`${isLargeRow? 'h-[200px] w-[200px]':'h-[100px] w-[200px]'} relative`}>
            <Image alt={item.name} src={`${(isLargeRow? BASE_IMG_URL + item.poster_path: BASE_IMG_URL + item.backdrop_path)}`} fill={true}/>
            </div>
         
           <div className={`absolute ${isLargeRow?'top-[20%]':'top-[10%]'} left-[10px] break-words`}><h3 className={`font-semibold ${isLargeRow ?'text-xl':'text-[1.1rem]'} text-[#fff]`}>{item?.name || item?.title}</h3></div>
          
           <div className={`px-4 pt-4 bg-primary-black `}>
           <div className="flex w-full justify-between items-center">
            <div className="flex items-center space-x-3 cursor-pointer">
              <AiFillPlayCircle size={18} color="rgb(250,250,250)" onClick={()=>
                {
                  setTrailer({...trailer,...{id:item.id}});
                  setOpenModal(true);
                }}/>
              <AiFillPlusCircle size={18} color="rgb(250,250,250)"/>
                <FaThumbsUp size={'18'} color={'rgb(250,250,250)'}/>
              
            </div>
            <Link href={`/details/${media_type}/${item.id}`}>
            <FaChevronCircleDown size={18} color="rgb(250,250,250)" />
            </Link>
          
           </div>
           <div className="flex  space-x-2 items-center text-[12px] mt-2 font-medium">
            <p className={`${item.vote_average <5.0 ?'text-[#d23d3d]':'text-[#2a842a]'}`}>{Math.ceil(item.vote_average *10)}% Match</p>
            <p><span>{randNum(4)}h</span> <span>{randNum(60)}m</span></p>
            <div className="h-[30px] w-[30px] p-1 border-2 border-solid border-mid-gray text-center">
             HD
            </div>
           </div>
            <ul className="flex space-x-1  text-[0.85rem] p-2 flex-wrap">
              {
                findGenres(genres,item.genre_ids).map((genre:string,index:number)=>
                (
                  <Link href={`/genre/${item.genre_ids[index]}`}>
                  <li key={`${genre}-${index}`}>{genre}</li>
                  </Link>
                ))
              }
            </ul>
           </div>
           </motion.div>
          </div>
         
        ))}

    
    </section>
    <div className="text-[1.8rem] bg-[rgb(0,0,0)] text-[#fff] top-0 right-[5px] absolute bottom-0 m-auto h-12 w-12 items-center flex justify-center rounded-md p-4 cursor-pointer z-[500] hover:opacity-50" onClick={()=>handleScrollClick('right')}>
  {'>'}
</div>
    </div>
  );
}

export default Row;
