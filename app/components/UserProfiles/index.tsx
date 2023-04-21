'use client';
import { profile, urlString,profileId,pageState } from '@/app/types'
import React,{useState} from 'react'
import Image from 'next/image';
import Link from 'next/link';
 import { doc, updateDoc, arrayRemove } from 'firebase/firestore';
import {toast, ToastContainer} from 'react-toastify';
import db from '@/app/lib/firebase.config';
import { useRouter } from 'next/navigation';
import DeleteProfileModal from '../DeleteProfileModal';
import {HiDotsVertical} from 'react-icons/hi';
import {IoMdAddCircle} from 'react-icons/io';
 import 'react-toastify/dist/ReactToastify.css';

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
    const [username, setUsername] = useState<string>('');
    async function handleProfileDelete(profileId:profileId,uid:string){
        // search for the specific user and delete their profile.
// Get a reference to the user document you want to update
// use the uid to get a reference to the right document.
const userDocRef = doc(db, 'users', uid); 

// Remove the specified profile from the 'profile' array
// the photoUrl is unique to every profile

//@Todo: add a profile id to identify a profile.

const updateData = { profile: arrayRemove(profileId) };
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
        // if(6 - numberOfProfiles === 0 )
        // {
        //     toast.error("You have run out of profiles");
        //     return;
        // }
        setPage('Add');
    }
    function handleEditPageTransition(index:profileId){
        setProfileId(index);
        setPage("Edit");
    }
    function showDelete(index:profileId,username:string){
        setProfileId(index);
        setUsername(username);
        setShowDeleteModal(true);
    }
    function storeUserProfile(index:profileId, uid:string,photoUrl:urlString)
    {
        
            localStorage.setItem('profile',JSON.stringify({uid,index,photoUrl}));
        
    }
    const h1Variants= {
        hidden:{

        }
        ,visible:{

        }
    }

  return (
    <div className="text-center flex flex-col justify-center items-center min-h-screen relative">
   {showDeleteModal&& <DeleteProfileModal uid={uid} handleProfileDelete={handleProfileDelete} profileId={profileId} setShowDeleteModal={setShowDeleteModal} username={username}/>}
   <ToastContainer position='top-right' theme='colored' />
     <h1 className='text-[36px]  lg:text-5xl font-bold text-smoke-white mb-[20px]'>Who is Watching ?</h1>
     <div className='absolute top-0 text-left right-0 text-[1.05rem] pr-4'><p> <span className={`font-semibold ${numberOfProfiles === 6  ? 'text-primary-red':""} `}>{6 - numberOfProfiles}</span> profiles remaining</p></div>
     <div className="flex space-x-4 flex-wrap my-3 items-center justify-center w-[80%] mx-auto px-3">
    {
        profiles.map(
            (profile:profile,index:number)=> <div className='h-[200px] relative w-[200px] flex flex-col space-y-3 items-center  text-center'   key={`${index}-${profile.photoUrl}`}>
        <div className='absolute  z-[10] right-[30px] top-[15px]'>
        <HiDotsVertical size={30} color={'rgb(255,255,255)'}/>
        
      
        </div>
          <div className={`bg-mid-gray ${numberOfProfiles !== 1 ?'h-[40px]':'h-[90px]'} w-[90px] rounded-[6px] text-smoke-white absolute top-[20px] right-[-55px] z-[10] font-normal text-[1.05rem]  flex flex-col space-y-3 px-4 py-2`}>
        <p onClick={()=>handleEditPageTransition(index as profileId)}>Edit</p>
     {numberOfProfiles !== 1 ?   <p onClick={()=> showDelete(index as profileId,profile.username)}>Delete</p>: ''}
        </div>
        <Link href ={'/browse'} onClick={()=> storeUserProfile(index as profileId, uid,profile.photoUrl)}>
        <Image src={`/avatar/avatar-${profile.photoUrl}.png`} height={150} className='rounded-md' width={150} alt={`${profile.username} profile pic`}/>
        </Link>
        <p className="font-medium text-[1.2rem] capitalize">{profile.username}</p>
        </div>
        )
    }
    {
        numberOfProfiles !== 6 ?
    (<div className='h-[200px] w-[200px] flex flex-col space-y-3 items-center text-center mt-3'>
    <span className='hover:opacity-50 cursor-pointer'>
    <IoMdAddCircle size={150} onClick={handleAddPageTransition} color='rgb(45,45,45)'/>
    </span>
     <button className="font-medium text-[1.2rem] capitalize">Add Profile</button>
     </div>) : ''
     }
      </div>

  
    </div>
  )
}

export default UserProfiles