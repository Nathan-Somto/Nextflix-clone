'use client';
import React ,{useState}from 'react';
import AvatarPage from '../AvatarPage';
import ProfileName from '../ProfileName';
import { pageState, profileId } from '../Profile';
import {addPage} from '../AddProfile';
import {profile, urlString} from '@/app/types';
import { doc, updateDoc } from 'firebase/firestore';
import db from '@/app/lib/firebase.config';
export type editProps = {
    uid:string;
    profileId:profileId;
    profiles:profile[];
    setPage:React.Dispatch<React.SetStateAction<pageState>>;
}
export type editPage = "Home" | addPage;
function EditProfile({uid, profileId,profiles,setPage}:editProps) 
{
    const [editPage, setEditPage] = useState<editPage>('Home');
    async function handleProfileEdit(Edit:addPage,data:profile,uid:string,profileId:profileId){
        const userDocRef = doc(db, 'users',uid);
        const {username,photoUrl} =data;
    if(Edit === 'Name'){
        //use firebase to edit the name for a particular profile
        try{
            const updatedUserName = {[`profile[${profileId}].username`]:username};
            await updateDoc(userDocRef,updatedUserName);
        }
        catch(err){
        }
       
    }
    else {
        try{
            const updatedPhotoUrl = {[`profile[${profileId}].photoUrl`]:photoUrl};
            await updateDoc(userDocRef,updatedPhotoUrl);
        }
        catch(err){

        }
    }
    //use firebase to edit the avatar for a particular profile

}
    function DynamicPage (){
        switch(editPage){
            case 'Home':
            return (
            <div>
        <p onClick={()=> setEditPage('Name')}>Edit  Profile Name</p>
        <p onClick={()=> setEditPage('Avatar')}>Edit Profile Avatar</p>
            </div>
            );
            case 'Avatar':
            return  <AvatarPage handleProfileEdit={handleProfileEdit} edit={true} profileId={profileId} uid={uid} profile={profiles}/>;
            case 'Name':
            return <ProfileName handleProfileEdit={handleProfileEdit} edit={true} profileId={profileId} uid={uid}/>;
            default:
            return <div>An error in state occured</div>
            return;
        }
    }
     function handlePage(){
    if(editPage === 'Home'){
      setPage('Profiles');
      return;
    }

    setEditPage('Home');
    }

  return (
   <section>
    <button onClick={handlePage}>Back</button>
    {DynamicPage()}
   </section>
  )
}

export default EditProfile;