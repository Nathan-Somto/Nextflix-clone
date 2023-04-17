'use client';
import React, { useState } from 'react'
import { pageState } from '../Profile'
import { profile } from '@/app/types'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import db from '@/app/lib/firebase.config';
import ProfileName from '../ProfileName';
import AvatarPage from '../AvatarPage';
import { editProps } from '../EditProfile';
export type addPage = 'Name' |'Avatar';
type addProps =Omit<editProps, 'profileId'>;
function AddProfile({uid,setPage,profiles}:addProps) {
    const [profileData, setProfileData] = useState<profile>({username:'',photoUrl:'1'});
    const [addPage, setAddPage] = useState<addPage>('Name');
    async function handleProfileAdd(){
        const docRef = doc(db, 'user',uid)
       try{ await updateDoc(docRef,{
            profile:arrayUnion(profileData)
        });
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
           return <AvatarPage  setProfileData={setProfileData}  handleProfileAdd={handleProfileAdd} edit={false}/>
           default:
           return <div>Add Profile</div>
        }
    }
  return (
    <div>
    <div onClick={handlePage}>Back</div>
    {DynamicAddPage()}
    </div>
  )
}

export default AddProfile