'use client';
import { IUser, urlString } from '@/app/types';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import{toast,ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import AddProfile from '../AddProfile';
import EditProfile from '../EditProfile';
type props ={
    user: IUser
}
export type pageState = "Add" | "Edit" | "Profiles"
function Profile({user}:props) {
  const [page,setPage] = useState<pageState>('Profiles');
  const [profileId, setProfileId] = useState<urlString>('1');
  function DynamicPage(){
    switch(page){
      case 'Add':
      return <AddProfile uid={user.uid} setPage={setPage} profiles={user.profile} />;
      case 'Profiles':
      return <UserProfiles profiles={user.profile} setPage={setPage} setProfileId={setProfileId} numberOfProfiles={user.profile.length} uid={user.uid}/>;
      case 'Edit':
      return <EditProfile profiles={user.profile} uid={user.uid} setPage={setPage} profileId={profileId}/>;
      default:
      return <div>no page provided</div>
    }
  }
  useEffect(()=>{
    toast.success("Successfully Logged in");
  });
  return (
    <AnimatePresence>
   <motion.main initial={{opacity:0,scale:0.5}} animate={{opacity:1, scale:1}} exit={{opacity:0}}>
   <ToastContainer position="top-right" theme="colored"/>
   <h1>Who is Watching ?</h1>
   </motion.main>
   </AnimatePresence>
  )
}

export default Profile;