'use client';
import { IUser, urlString,profileId ,pageState} from '@/app/types';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import{toast,ToastContainer} from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
import AddProfile from '../AddProfile';
import EditProfile from '../EditProfile';
import UserProfiles from '../UserProfiles';
type props ={
    user: IUser;
    id:string;
}
function Profile({user,id}:props) {
  const [page,setPage] = useState<pageState>('Profiles');
  const [profileId, setProfileId] = useState<profileId>(0);
  function DynamicPage(){
    switch(page){
      case 'Add':
      return <AddProfile  setPage={setPage} profiles={user.profile} id={id} />;
      case 'Profiles':
      return <UserProfiles profiles={user.profile} setPage={setPage} setProfileId={setProfileId} numberOfProfiles={user.profile.length} id={id} profileId={profileId}/>;
      case 'Edit':
      return <EditProfile profiles={user.profile}  setPage={setPage} profileId={profileId} id={id}/>;
      default:
      return <div>no page provided</div>
    }
  }
  useEffect(()=>{
    toast.success("Successfully Logged in");
  },[]);

  return (
    <AnimatePresence>
   <motion.main initial={{opacity:0,scale:0.5}} animate={{opacity:1, scale:1}} exit={{opacity:0}}>
   <ToastContainer position="top-right" theme="colored"/>
   {DynamicPage()}
   </motion.main>
   </AnimatePresence>
  )
}

export default Profile;