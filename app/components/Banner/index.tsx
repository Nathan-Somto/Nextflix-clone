"use client";
import { BASE_IMG_URL } from "@/app/providers/common";
import { IMovie } from "@/app/types";
import { truncate, randNum } from "@/app/utils";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import movieTrailer from "movie-trailer";

function Banner({ data }: { data: IMovie[] }) {
  const index = useRef(0);
  const [url, setUrl] = useState<string>("");
  const [mute, setMute] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(true);
  index.current = randNum(data.length);
  useEffect(() => {
    (async function () {
      const youtubeLink = await movieTrailer(data[index.current].title);
      setUrl(youtubeLink as string);
    })();
  }, []);
  return (
    <header
      className={`bg-cover bg-[url${
        BASE_IMG_URL + data[index.current].backdrop_path
      }] bg-center h-[31.25rem] w-full relative object-contain`}
    >
      <ReactPlayer
        className="react-player"
        url={url}
        width={"100%"}
        mute={mute}
        playing={playing}
        volume={1}
        height={"100%"}
        loop={true}
      />
      <div className="absolute left-[1.875rem] top-[9rem] h-[12.5rem]">
        <h1 className="text-5xl font-bold mb-[0.5rem]">{data[index.current]?.title ||data[index.current]?.name|| data[index.current]?.original_title}</h1>
        <div className="flex space-x-4">
          <button
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
        <div className="w-[45%] leading-[1.3] h-[5rem] mt-4 max-w-[22.5rem] text-[0.8rem] break-words">
          <p>
            {truncate(
              data[index.current].overview,
              data[index.current].overview.length
            )}
          </p>
        </div>
      </div>
      <div
        className="right-[10%] bottom-[10%]"
        onClick={() => setMute((prevState) => !prevState)}
      >
        {mute ? "volume" : "mute"}
      </div>
      <div className="absolute h-[8rem] bg-gradient-to-b from-bg-[rgba(0,0,0,0)]  via-bg-[rgba(37,37,37,0.6)] to-primary-black"></div>
    </header>
  );
}

export default Banner;
