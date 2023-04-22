'use client';
import React, { useEffect, useState } from 'react'
import { ProfileNameProps } from '../ProfileName'
import Image from 'next/image';
import { profile, urlString } from '@/app/types';
import {Variants, motion} from 'framer-motion';
type AvatarProps =Omit<ProfileNameProps, 'setState'> &{
    handleProfileAdd?:(data:profile,id:string)=> Promise<void>;
    profile:profile[];
}
type urlMaps<T extends string | number | symbol> = 
{
  [index in T]?: boolean;
};
function AvatarPage({handleProfileAdd,setProfileData,edit,handleProfileEdit,profileId,profile,profileData,id}:AvatarProps) {
  const [url, setUrl] = useState<urlString | '-1'>('-1');
  const [availableUrl, setAvailableUrl] = useState<urlString[]>(['1','2','3','4','5','6','7','8','9','10']);
  useEffect(()=>{
    const urlMaps:urlMaps<urlString> = {};
    profile.forEach((item:profile,index:number)=>{
      urlMaps[item.photoUrl] = true;
    });
    console.log(urlMaps);
    setAvailableUrl([...availableUrl.filter((item, index)=> !urlMaps[item])]);
  },[]);
   async function handleProfileOption(){
    console.log("clciked");
      if(edit && handleProfileEdit && url !== '-1' && id && profileId){
       await handleProfileEdit('Avatar',{username:"", photoUrl:url},id,profileId);
      }
      if(handleProfileAdd && url !== '-1' && setProfileData && profileData)
      {
        console.log("in profile add");
          setProfileData((prevState)=>({...prevState,photoUrl:url}));
          try{
                 await handleProfileAdd(profileData,id);
          }
          catch(err){
            console.log(err);
          }

     }
    }
    const containerVariants:Variants={
      hidden:{
        opacity:0,
      },
      visible:{
        opacity:1,
        transition:{
          delayChildren:0.25,
          staggerChildren:0.35,
        }

      }
    }
    const childrenVariants:Variants={
      hidden:{
        opacity:0,
        scale:0,
      },
      visible:{
        opacity:1,
        scale:1,
        transition:{
          type:'spring',
          stiffness:250,

        }
      }
    }
  return (
    <div className='flex md:flex-row flex-col min-h-screen md:divide-x-2 justify-evenly border-mid-gray divide-y-2 md:divide-y-0 w-full px-6'>
    <div className='flex flex-col space-y-2 items-center md:items-start mb-4'>
    <Image src={`/avatar/avatar-${url}.png`} height={150} width={150} alt="selected user Profile"/>
    <button  onClick={handleProfileOption} className='btn-done w-full'>Done</button>
    </div>
    <div className="flex flex-col space-x-3 flex-shrink-0 w-[100%] md:w-[70%] text-smoke-white items-center md:items-start md:pl-3">
    <h2 className="font-semibold text-3xl mb-[50px] pt-[20px] lg:text-4xl">Select an Avatar</h2>
    <motion.div className="flex  flex-wrap" variants={containerVariants} initial={'hidden'} animate={'visible'}>{
      availableUrl.map((item:urlString,index:number)=> <motion.div variants={childrenVariants} key={`${item}-${index}`} className="relative h-[80px] w-[80px] mb-3 mr-3 cursor-pointer rounded-md" onClick={()=>setUrl(item)}>
       <Image src={`/avatar/avatar-${item}.png`} fill={true} alt="available  Profile images"/>
      </motion.div>)
    }</motion.div>
    </div>
    </div>
  )
}

export default AvatarPage