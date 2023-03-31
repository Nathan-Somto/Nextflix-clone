"use client";
import { API_KEY, BASE_IMG_URL, BASE_URL, BASE_YOUTUBE } from "@/app/providers/common";
import { IMovie, ITvOriginals, Video } from "@/app/types";
import { truncate, randNum } from "@/app/utils";
import React, { useEffect, useRef, useState } from "react";
import { FaInfo, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import ReactPlayer from "react-player/lazy";


function Banner({ data,index }: { data: ITvOriginals[],index:number}) {
  
  const [url, setUrl] = useState<string>("");
  const [mute, setMute] = useState<boolean>(true);
  const [playing, setPlaying] = useState<boolean>(true);
 console.log(index);
  useEffect(() => {
   
    (async function () {
   /*  */console.log(data[index].id);
  
      let res = await fetch(`https://api.themoviedb.org/3/tv/${data[index].id}/videos?api_key=3cbaa7017430fa9e773de762de7c63a0&language=en-US`);
      let videoData:Video = await res.json();
      const {key} = videoData.results[0];
      setUrl(key);
    })();
    return ()=>{
      setUrl('');
    }
  }, []);
  return (
    <header
      className={`bg-cover 
   
  bg-center h-[31.25rem] w-full relative object-contain`}
  style={{backgroundImage:`url(${BASE_IMG_URL+ data[index].backdrop_path.slice(1)})`}}
    >
{url && <ReactPlayer
        className="react-player"
        url={BASE_YOUTUBE+url}
        width={"100%"}
        mute={mute}
        playing={playing}
        height={"100%"}
        
        loop={true}
        playsinline={true}
        controls={false}
      />}
      <div className="absolute left-[1.875rem] top-[9rem] h-[12.5rem]">
        <h1 className="text-5xl font-bold mb-[1.1rem]">{data[index]?.title ||data[index]?.name|| data[index]?.original_name}</h1>
        <div className="flex space-x-4">
          <button
          onClick={()=> setPlaying(false)}
            className={
              "outline-[#fff] cursor-pointer border-none text-[primary-black] rounded-sm px-8 space-x-3 py-2 bg-[rgba(51,51,51,0.53)] hover:text-primary-black hover:bg-smoke-white transition-all duration-200 ease-linear "
            }
          >
            <span><FaPlay color="#000" size="15" className='inline'/></span>
            Play
          </button>
          <button
            className={
              "outline-[#fff] cursor-pointer border-none text-[primary-black] rounded-sm px-8 py-2 space-x-3 bg-[rgba(51,51,51,0.53)] hover:text-primary-black hover:bg-smoke-white transition-all duration-200 ease-linear "
            }
          >
            <span><FaInfo color="#000" size="15" className='inline'/></span>
            More Info
          </button>
        </div>
        <div className="w-[80%] leading-[1.3] h-[5rem] mt-4 max-w-[22.5rem] text-[1rem] break-words">
          <p>
            {truncate(
              data[index].overview,
              data[index].overview.length
            )}
          </p>
        </div>
      </div>
      <div
        className="right-[10%] absolute bottom-[10%]"
       
      >
        {mute ? <FaVolumeUp color="#fff" size={35}  onClick={() => setMute(!mute)}/> : <FaVolumeMute color="#fff" size="35"  onClick={() => setMute(!mute)}/>}
      </div>
      <div className="absolute h-[8rem] bg-gradient-to-b from-[rgba(0,0,0,0)]  via-[rgba(18,18,18,0.6)] to-[#000] w-full"></div>
    </header>
  );
}

export default Banner;
