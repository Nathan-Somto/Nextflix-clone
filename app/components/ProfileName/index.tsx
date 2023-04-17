'use client';
import React, { FormEvent, useRef, useState } from 'react'
import { addPage } from '../AddProfile';
import { profile } from '@/app/types';
export type ProfileNameProps ={
    setState?:React.Dispatch<React.SetStateAction<addPage>>;
    setProfileData?:React.Dispatch<React.SetStateAction<profile>>;
    edit:boolean;
    handleProfileEdit?:(Edit:addPage, data:profile)=>Promise<void>;

}

function ProfileName({setProfileData,setState,edit,handleProfileEdit}:ProfileNameProps) {
 const username = useRef<HTMLInputElement>(null);
 const [error, setErrors] = useState<boolean>(false);
async function handleProfileOptions(){
  const {current} = username;
  if(current === null || !current.value.length){
    setErrors(true);
    return;
  }
    if(edit && handleProfileEdit){
       await handleProfileEdit('Avatar',{username:current.value, photoUrl:'1'});
      }
      if(setProfileData && setState){
        setProfileData((prevState)=>({...prevState,username:current.value}));
        setState('Avatar');
      }
  
 }
  return (
    <div>
     <form onClick={handleProfileOptions} >
     <label htmlFor="username">
     <input type="text" placeholder='What is your Name?' id={'username'} ref={username} />
   {error &&  <small>You have to know your name :( </small>}
     </label>
     <button>{edit ? 'Add Name':"Edit Name"}</button>
    </form></div>
  )
}

export default ProfileName