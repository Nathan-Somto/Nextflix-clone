"use client";
import { API_KEY, BASE_IMG_URL, BASE_URL, BASE_YOUTUBE } from "@/app/providers/common";
import { IMovie, ITvOriginals, Video } from "@/app/types";
import { truncate, randNum } from "@/app/utils";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";


function Banner({ data }: { data: ITvOriginals[] }) {
 const[index, setIndex] = useState(0);
  const [url, setUrl] = useState<string>("");
  const [mute, setMute] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
 
  useEffect(() => {
   setIndex(randNum(data.length));
    (async function () {
   /*  */console.log(data[index].id);
   console.log(index)
   console.log(API_KEY);
      let res = await fetch(`https://api.themoviedb.org/3/tv/${data[index].id}/videos?api_key=3cbaa7017430fa9e773de762de7c63a0&language=en-US`);
      let videoData:Video = await res.json();
      console.log(videoData)
      const {key} = videoData.results[0];
      console.log(key);
      setUrl(key);
    })();
  }, []);
  return (
    <header
      className={`bg-cover bg-[url(${(
        BASE_IMG_URL + data[index].backdrop_path
  )})] bg-center h-[31.25rem] w-full relative object-contain`}
    >
{url && <ReactPlayer
        className="react-player"
        url={BASE_YOUTUBE+url}
        width={"100%"}
        mute={mute}
        playing={playing}
        volume={1}
        height={"100%"}
        loop={true}
      />}
      <div className="absolute left-[1.875rem] top-[9rem] h-[12.5rem]">
        <h1 className="text-5xl font-bold mb-[1.1rem]">{data[index]?.title ||data[index]?.name|| data[index]?.original_name}</h1>
        <div className="flex space-x-4">
          <button
          onClick={()=> setPlaying(false)}
            className={
              "outline-[#fff] cursor-pointer border-none text-[primary-black] rounded-sm px-8 py-2 bg-[rgba(51,51,51,0.53)] hover:text-primary-black hover:bg-smoke-white transition-all duration-200 ease-linear "
            }
          >
            {playing ? "Pause" : "Play"}
          </button>
          <button
            className={
              "outline-[#fff] cursor-pointer border-none text-[primary-black] rounded-sm px-8 py-2 bg-[rgba(51,51,51,0.53)] hover:text-primary-black hover:bg-smoke-white transition-all duration-200 ease-linear "
            }
          >
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
        className="right-[10%] bottom-[10%]"
        onClick={() => setMute(!mute)}
      >
        {mute ? "volume" : "mute"}
      </div>
      <div className="absolute h-[8rem] bg-gradient-to-b from-bg-[rgba(0,0,0,0)]  via-bg-[rgba(37,37,37,0.6)] to-primary-black"></div>
    </header>
  );
}

export default Banner;
