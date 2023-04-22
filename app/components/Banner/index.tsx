"use client";
import {  BASE_IMG_URL} from "@/app/providers/common";
import { ITvOriginals } from "@/app/types";
import { randNum, truncate,} from "@/app/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaInfo, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { TrailerContext, useTrailer } from "@/app/context/TrailerContext";


function Banner({ data }: { data: ITvOriginals[]}) {
  const [movie, setMovie] = useState<ITvOriginals | null>(null);
  const {trailer,setTrailer,setOpenModal} = useTrailer() as TrailerContext;
  const [mute, setMute] = useState<boolean>(true);
  useEffect(()=>{
      let selectedMovie = randNum(data.length);
      setMovie(data[selectedMovie]);
  },[data])
 
  return (
    <header
      className={`bg-cover 
   
  bg-center h-[31.25rem] w-full relative object-contain`}
  style={{backgroundImage:`url(${BASE_IMG_URL+ movie?.backdrop_path.slice(1)})`}}
    >
{movie &&(
  <>
      <div className="absolute left-[1.875rem] top-[9rem] h-[12.5rem] text-[14px] md:text-base">
        <h1 className="text-5xl font-bold mb-[1.1rem]">{movie?.title ||movie?.name|| movie?.original_name}</h1>
        <div className="w-[80%] leading-[1] md:leading-[1.3] h-[5rem] mb-8 max-w-[22.5rem] text-[0.75ren] md:text-[1rem] break-words">
          <p>
           { truncate(
              movie.overview,
              movie.overview.length
            )
}
          </p>
        </div>
       </div>
       <div className="flex space-x-4  left-[1.875rem] md:right-0 absolute bottom-[20%]">
          <button
          onClick={()=>{ 
            setTrailer({...trailer,...{id:movie.id}})
            setOpenModal(true)

          }}
            className={
              "outline-[#fff] cursor-pointer border-none text-primary-black rounded-sm px-8 space-x-3 py-2 bg-[rgba(51,51,51,0.53)] hover:text-primary-black hover:bg-smoke-white transition-all duration-200 ease-linear "
            }
          >
            <span><FaPlay color="#000" size="15" className='inline'/></span>
            <span>Play</span> 
          </button>
          <Link
          href={`/details/tv/${movie.id}`}
            className={
              "outline-[#fff] cursor-pointer border-none text-primary-black rounded-sm px-8 py-2 space-x-3   bg-smoke-white transition-all duration-200 ease-linear "
            }
          >
            <span><FaInfo color="#000" size="15" className='inline'/></span>
            <span> More Info</span>
          
          </Link>
        </div>
    
      <div
        className="right-[10%] absolute bottom-[10%]"
       
      >
        {mute ? <FaVolumeUp color="#fff" size={35}  onClick={() => setMute(!mute)}/> : <FaVolumeMute color="#fff" size="35"  onClick={() => setMute(!mute)}/>}
      </div>
      <div className="absolute h-[8rem] bg-gradient-to-b from-[rgba(0,0,0,0)] bottom-0  via-[rgba(18,18,18,0.6)] to-[#000] w-full"></div>
      </>
)
     }
    </header>
    
   
  );
}

export default Banner;
