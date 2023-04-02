'use client';

import { media_type } from '@/app/types';
import { Dispatch, SetStateAction, createContext,useContext,useState } from 'react';
export type TrailerContext={
    trailer:trailer;
    openModal:boolean;
    setTrailer:Dispatch<SetStateAction<trailer>>;
    setOpenModal:Dispatch<SetStateAction<boolean>>;
}
export const TrailerContext = createContext<TrailerContext| null>(null);
 export function useTrailer(){
return  useContext(TrailerContext);
 }
 type trailer = {
    id: number;
    media_type: media_type;
  };
export default function TrailerProvider({ children }:{children:React.ReactNode}) {
    const [trailer, setTrailer]=useState<trailer>({
        id:0,
        media_type:'tv',
    })
    const [openModal, setOpenModal]= useState<boolean>(false);
  return (
    <TrailerContext.Provider value={{trailer,setTrailer,openModal,setOpenModal}}>
      {children}
    </TrailerContext.Provider>
  );
}