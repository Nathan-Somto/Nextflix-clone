'use client';
import { profile, urlString } from '@/app/types'
import React from 'react'
import { pageState } from '../Profile';

type Props =
{
    profiles:profile[];
    uid:string;
    profileId:urlString;
    numberOfProfiles:number;
    setPage:pageState;
    setProfileId:React.Dispatch<React.SetStateAction<urlString>>;
}
function UserProfiles({profiles,profileId,numberOfProfiles,setPage,setProfileId,uid}:Props) {
    async function handleProfileDelete(profileId:urlString,uid:string){
        // search for the specific user and delete their profile.
    }
  return (
    <div>
    <DeleteProfileModal uid={uid} handleProfileDelete={handleProfileDelete} profileId={profileId}/>
    UserProfiles
    </div>
  )
}

export default UserProfiles