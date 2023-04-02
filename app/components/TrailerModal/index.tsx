"use client";
import { BASE_IMG_URL, BASE_YOUTUBE } from "@/app/providers/common";
import {  Video } from "@/app/types";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { TrailerContext, useTrailer } from "@/app/context/TrailerContext";
import { truncate } from "@/app/utils";
function TrailerModal() {
  const {
    trailer: { id, media_type },
    openModal,
    setOpenModal,
  } = useTrailer() as TrailerContext;

  const [url, setUrl] = useState<string>("");

  const [muted, setMuted] = useState<boolean>(true);

  const [info, setInfo] = useState<Video | null>(null);

  useEffect(() => {
    if(!id) return;
    async function getVideos () {
      /*  */ console.log(id);

      let res = await fetch(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=3cbaa7017430fa9e773de762de7c63a0&language=en-US&append_to_response=videos`
      );
      let videoData:Video = await res.json();
        console.log(videoData);
    const{key}=  videoData?.videos?.results[0];
        console.log(key);
    setInfo(videoData);

    setUrl(key);
   
     
      };
      getVideos();
    return () => {
      
      setUrl("");

    };
  }, [id]);

  return (

   openModal ?
    (
      <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 , scale:0.5}}
      transition={{ duration: 0.3, ease: "easeIn" }}
      animate={{ opacity:1, scale:1 }}
      exit={{opacity:0, scale:0.5}}
      className="w-full h-full z-[1500] fixed top-0 left-0 bg-[rgba(0,0,0,0.5)]"
    >
      <motion.div
        initial={{ top: "-100%", opacity: 0 }}
        animate={{ top: ["-100%", "-50%", "0%", "5%"], opacity: 1 }}
        transition={{ duration: 0.4 ,delay:0.3}}
        className="overflow-scroll  w-[80%] max-w-[600px] absolute top-[5%] left-[50%]  translate-x-[-50%] mx-auto"
      >
        <div className="absolute  right-[0] z-[50]">
          <AiOutlineClose
            size={50}
            color="#fff"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className={`relative h-[18rem] bg-cover bg-center`} style={{backgroundImage:`${!url?`url(${BASE_IMG_URL+ info?.backdrop_path.slice(1)})`:''}`}}>
        {url && (
         
          <ReactPlayer
            url={BASE_YOUTUBE + url}
            width={"100%"}
            height={"100%"}
            loop={true}
            playsinline={true}
            muted={muted}
          />
         
        )}
          <div className="absolute top-[30%] md:top-[50%] text-xl font-bold    ">
          <h2>{info?.title || info?.name}</h2>
        </div>
        </div>
      

        <div className="bg-mid-gray opacity-500 text-[#fff] md:text-base text-[0.85rem] w-[100%]    z-[1500] py-4 px-4 md:px-7">
          <div className="flex items-center space-x-3 ">
            <p className="text-[#0f3]">
              {info?.vote_average&&(info.vote_average as number * 10)}% match
            </p>
            <p>{info?.first_air_date}</p>
            <div className="h-[30px] w-[30px] p-1 border-2 text-[0.85rem] font-bold border-solid border-[rgba(150,150,150,0.5)] text-center">
              HD
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-[50%] font-medium">{ info?.overview &&
            truncate(info.overview as string,
               info.overview.length as number)}</div>
            <div className="flex flex-col space-y-3 font-light">
              <p>
              
                <span>Genres: </span>
                {info?.genres.map(item=> item.name).join(", ")}
              </p>
              <p>
                <span>Original Language: </span>
                {info?.original_language}
              </p>
              <p>
                <span>Vote count: </span>
                {info?.vote_count}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </AnimatePresence>
  )
  :(<>
    </>)
  )}
        
  


export default TrailerModal;
