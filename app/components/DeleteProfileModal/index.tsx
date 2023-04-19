import React from 'react'
import { profileId } from '../Profile';
import { FaTimes } from 'react-icons/fa';
type props=
{
    uid:string;
    handleProfileDelete:(profileId:profileId,uid:string)=>Promise<void>;
    profileId:profileId;
    setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
    username:string;
}
function DeleteProfileModal({uid, handleProfileDelete, profileId,setShowDeleteModal, username}:props) {
  return (
    <div className='fixed h-full w-full top-0 z-[9999] bg-[rgba(0,0,0,0.5)] backdrop-blur-xl '>
    <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-[rgba(255,250,200)] justify-between flex flex-col items-center shadow-lg py-2 px-6 h-[150px] w-[200px] rounded-md text-primary-black'>
    <FaTimes size={30} color='rgba(5,5,5,0.5)' className='absolute right-0'  onClick={()=> setShowDeleteModal(prevState => !prevState)}/>
    <h1 className='text-2xl'>Hi are you sure you want  to  delete {username} profile ?</h1>
    <div className='flex w-full px-5 justify-between items-center text-[1.1rem]'>
    <button onClick={()=> setShowDeleteModal(prevState => !prevState)} className='text-[#138b13]'>cancel</button>
    <button onClick={()=> handleProfileDelete(profileId,uid)} className='text-[#e62020]'>ok</button>
    </div>
    </div>
    </div>
  )
}

export default DeleteProfileModal;