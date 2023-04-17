'use client';
import React, { useState } from 'react'
import { ProfileNameProps } from '../ProfileName'
import Image from 'next/image';
import { urlString } from '@/app/types';
type AvatarProps =Omit<ProfileNameProps, 'setState'> &{
    handleProfileAdd?:()=> Promise<void>
}
function AvatarPage({handleProfileAdd,setProfileData,edit,handleProfileEdit}:AvatarProps) {
  const [url, setUrl] = useState<urlString | '-1'>('-1');
  const [availableUrl, setAvailableUrl] = useState<urlString[]>(['1','2','3','4','5','6','7','8','9','10']);
   async function handleProfileOption(){
      if(edit && handleProfileEdit && url !== '-1'){
       await handleProfileEdit('Avatar',{username:"", photoUrl:url});
      }
      if(handleProfileAdd)
      {

     await handleProfileAdd();
     }
    }
  return (
    <div>
    <div>
    <Image src={`/public/avatar/avatar-${url}.png`} height={50} width={50} alt="selected user Profile"/>
    <button onClick={handleProfileOption}>Done</button>
    <div>{
      availableUrl.map((item:urlString,index:number)=> <div onClick={()=>setUrl(item)}>
       <Image src={`/public/avatar/avatar-${item}.png`} fill={true} alt="available  Profile images"/>
      </div>)
    }</div>
    </div>
    </div>
  )
}

export default AvatarPage