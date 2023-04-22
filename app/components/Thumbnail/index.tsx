import { IMovie, ITvOriginals, media_type } from '@/app/types';
import React from 'react'
import Image from 'next/image';
import { BASE_IMG_URL } from '@/app/providers/common';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { findGenres, randNum } from '@/app/utils';
import { TrailerContext, useTrailer } from '@/app/context/TrailerContext';

type props ={
    data:ITvOriginals | IMovie;
    isLarge:boolean;
    media_type:media_type;
}
function Thumbnail({isLarge, data, media_type}:props) {
    const {setTrailer,setOpenModal} = useTrailer() as TrailerContext;
  return (
   <div
          
            className={`p-[1.25rem] relative movie__poster  rounded-md  bg-cover bg-center flex-shrink-0 mr-[0.65rem] transition-all duration-400   ${
              isLarge
                ? "max-w-[200px] h-[300px] min-w-[150px]  max-h-[300px]"
                : "h-[150px] w-[200px]"
            }`}
            onClick={()=>{
              setTrailer(prevState=> ({...prevState, id:data.id, media_type}));
              setOpenModal(prevState=> !prevState);
            }}
          >
           <Image alt={data.name} src={`${(isLarge? BASE_IMG_URL + data.poster_path: BASE_IMG_URL + data.backdrop_path)}`} fill={true} />
        
           </div>
  )
}

export default Thumbnail