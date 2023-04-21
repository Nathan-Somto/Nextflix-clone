'use client';
import React, {  useRef, useState } from 'react'
import { profile,profileId, addPage } from '@/app/types';
import {motion} from 'framer-motion';
export type ProfileNameProps ={
    setState?:React.Dispatch<React.SetStateAction<addPage>>;
    setProfileData?:React.Dispatch<React.SetStateAction<profile>>;
    edit:boolean;
    uid?:string;
    profileId?:profileId;
    handleProfileEdit?:(Edit:addPage, data:profile,uid:string,profileId:profileId)=>Promise<void>;

}

function ProfileName({setProfileData,setState,edit,handleProfileEdit,uid,profileId}:ProfileNameProps) {
 const username = useRef<HTMLInputElement>(null);
 const [error, setErrors] = useState<boolean>(false);
async function handleProfileOptions(e:React.FormEvent){
  e.preventDefault();
  const {current} = username;
  if(current === null || !current.value.length){
    setErrors(true);
    return;
  }
    if(edit && handleProfileEdit && uid && profileId){
       await handleProfileEdit('Name',{username:current.value, photoUrl:'1'},uid,profileId);
      }
      if(setProfileData && setState){
        setProfileData((prevState)=>({...prevState,username:current.value}));
        setState('Avatar');
      }
  
 }
  return (
    <motion.div initial={{x:"100%"}} animate={{x:"0%"}} transition={{type:'spring',bounce:0.5, stiffness:30, ease:"easeIn"}}  className='flex flex-col items-center min-h-screen justify-center text-white-smoke'>
     <form onSubmit={handleProfileOptions} className='w-[80%] mx-auto px-4 flex flex-col text-center space-y-4' >
     <label htmlFor="username" className='w-full'>
     <input type="text" placeholder='What is your Name?' id={'username'} ref={username} className='py-3 px-4 w-full bg-[rgba(0,0,0,0)] text-white-smoke max-w-[320px] mx-auto active:border-b-2 active:border-b-mid-gray mt-0 mb-[50px] block text-center pb-[30px] text-[1.55rem] border-b border-solid border-b-mid-gray' />
   {error &&  <small className=' text-primary-red font-bold  '>You have to know your name :( </small>}
     </label>
     <button>{!edit ? 'Add Name':"Edit Name"}</button>
    </form>
    </motion.div>
  )
}

export default ProfileName