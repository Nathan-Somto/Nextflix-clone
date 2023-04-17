'use client';
import React ,{useState}from 'react';
import AvatarPage from '../AvatarPage';
import ProfileName from '../ProfileName';
import { pageState } from '../Profile';
import {addPage} from '../AddProfile';
import {profile, urlString} from '@/app/types';
export type editProps = {
    uid:string;
    profileId:urlString;
    profiles:profile[];
    setPage:React.Dispatch<React.SetStateAction<pageState>>;
}
export type editPage = "Home" | addPage;
function EditProfile({uid, profileId,profiles,setPage}:editProps) 
{
    const [editPage, setEditPage] = useState<editPage>('Home');
    async function handleProfileEdit(Edit:addPage,data:profile){
    if(Edit === 'Name'){
        //use firebase to edit the name for a particular profile
        return;
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
            return  <AvatarPage    handleProfileEdit={handleProfileEdit} edit={true}/>;
            case 'Name':
        return    <ProfileName handleProfileEdit={handleProfileEdit} edit={true}/>;
          
            default:
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
    <div onClick={handlePage}></div>
    {DynamicPage()}
   </section>
  )
}

export default EditProfile;