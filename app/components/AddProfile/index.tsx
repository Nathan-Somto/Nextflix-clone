'use client';
import React, { useState } from 'react'
import { profile, addPage } from '@/app/types'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import db from '@/app/lib/firebase.config';
import ProfileName from '../ProfileName';
import AvatarPage from '../AvatarPage';
import { editProps } from '../EditProfile';
import { FaChevronLeft } from 'react-icons/fa';
import {motion} from 'framer-motion';
type addProps =Omit<editProps, 'profileId'>;
function AddProfile({uid,setPage,profiles}:addProps) {
    const [profileData, setProfileData] = useState<profile>({username:'',photoUrl:'1'});
    const [addPage, setAddPage] = useState<addPage>('Name');
    async function handleProfileAdd(){
        const docRef = doc(db, 'users',uid)
       try{ let res = await updateDoc(docRef,{
            profile:arrayUnion(profileData)
        });
        console.log("added profile",res);
        setPage('Profiles');
        }
        catch(err){

        }
    }
    function handlePage(){
    if(addPage === 'Name'){
      setPage('Profiles');
      return;
    }
    setAddPage('Name');
    }
    function DynamicAddPage(){
        switch(addPage){
            case 'Name':
           return <ProfileName  setProfileData={setProfileData} setState={setAddPage} edit={false}/>;
           case 'Avatar':
           return <AvatarPage  setProfileData={setProfileData} handleProfileAdd={handleProfileAdd} edit={false} profile={profiles}/>
           default:
           return <div>Add Profile</div>
        }
    }
    console.log("the profile data: ",profileData);
  return (
    <div>
    <button onClick={handlePage} className='btn-back ml-3' ><motion.span whileHover={{x:-10}} transition={{type:"spring", bounce:0.65}}> <FaChevronLeft size={16} color={'#E5E5E5'}/></motion.span>Back</button>
    {DynamicAddPage()}
    </div>
  )
}

export default AddProfile