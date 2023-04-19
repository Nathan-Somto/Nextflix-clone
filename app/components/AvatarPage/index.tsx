'use client';
import React, { useEffect, useState } from 'react'
import { ProfileNameProps } from '../ProfileName'
import Image from 'next/image';
import { profile, urlString } from '@/app/types';
type AvatarProps =Omit<ProfileNameProps, 'setState'> &{
    handleProfileAdd?:()=> Promise<void>;
    profile:profile[];
}
type urlMaps<T extends string | number | symbol> = 
{
  [index in T]?: boolean;
};
function AvatarPage({handleProfileAdd,setProfileData,edit,handleProfileEdit,uid,profileId,profile}:AvatarProps) {
  const [url, setUrl] = useState<urlString | '-1'>('-1');
  const [availableUrl, setAvailableUrl] = useState<urlString[]>(['1','2','3','4','5','6','7','8','9','10']);
  useEffect(()=>{
    const urlMaps:urlMaps<urlString> = {};
    profile.forEach((item:profile,index:number)=>{
      urlMaps[item.photoUrl] = true;
    });
    setAvailableUrl([...availableUrl, ...availableUrl.filter((item, index)=> urlMaps[item])]);
  },[]);
   async function handleProfileOption(){
      if(edit && handleProfileEdit && url !== '-1' && uid && profileId){
       await handleProfileEdit('Avatar',{username:"", photoUrl:url},uid,profileId);
      }
      if(handleProfileAdd)
      {

     await handleProfileAdd();
     }
    }
  return (
    <div>
    <div>
    <Image src={`/avatar/avatar-${url}.png`} height={50} width={50} alt="selected user Profile"/>
    <button onClick={handleProfileOption}>Done</button>
    <div>{
      availableUrl.map((item:urlString,index:number)=> <div onClick={()=>setUrl(item)}>
       <Image src={`/avatar/avatar-${item}.png`} fill={true} alt="available  Profile images"/>
      </div>)
    }</div>
    </div>
    </div>
  )
}

export default AvatarPage