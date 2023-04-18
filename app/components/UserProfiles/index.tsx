'use client';
import { profile, urlString } from '@/app/types'
import React,{useState} from 'react'
import { pageState, profileId } from '../Profile';
import Image from 'next/image';
 import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import {toast, ToastContainer} from 'react-toastify';
import db from '@/app/lib/firebase.config';
import { useRouter } from 'next/navigation';

type Props =
{
    profiles:profile[];
    uid:string;
    profileId:profileId;
    numberOfProfiles:number;
    setPage:React.Dispatch<React.SetStateAction<pageState>>;
    setProfileId:React.Dispatch<React.SetStateAction<profileId>>;
}
function UserProfiles({profiles,profileId,numberOfProfiles,setPage,setProfileId,uid}:Props) {
    const route = useRouter();
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    async function handleProfileDelete(profileId:urlString,uid:string){
        // search for the specific user and delete their profile.
// Get a reference to the user document you want to update
// use the uid to get a reference to the right document.
const userDocRef = doc(db, 'users', uid); 

// Remove the specified profile from the 'profile' array
// the photoUrl is unique to every profile

//@Todo: add a profile id to identify a profile.

const updateData = { profile: arrayRemove({ photoUrl: profileId }) };
try{
await updateDoc(userDocRef, updateData); 
route.refresh();

}
catch(err){
    console.log(err);
}

    }
    function handleAddPageTransition()
    {
        if(6 - numberOfProfiles === 0 )
        {
            toast.error("You have run out of profiles");
            return;
        }
        setPage('Add');
    }
    function handleEditPageTransition(index:profileId){
        setProfileId(index);
        setPage("Edit");
    }
    function showDelete(index:profileId){
        setProfileId(index);
        setShowDeleteModal(true);
    }
  return (
    <div>
   {showDeleteModal&& <DeleteProfileModal uid={uid} handleProfileDelete={handleProfileDelete} profileId={profileId}/>}
     <h1>Who is Watching ?</h1>
     <div><p>{6 - numberOfProfiles} profiles remaining</p></div>
    {
        profiles.map((profile:profile,index:number)=> <div key={`${index}-${profile.photoUrl}`}>
        <div>
        <p onClick={()=>handleEditPageTransition(index as profileId)}>Edit</p>
        <p onClick={()=> showDelete(index as profileId)}>Delete</p>
        </div>
        <Image src={`/public/avatar-${profile.photoUrl}.png`} height={70} width={70} alt={`${profile.username} profile pic`}/>
        <p>{profile.username}</p>
        </div>)
    }
   <button>Add Profile</button>
    </div>
  )
}

export default UserProfiles