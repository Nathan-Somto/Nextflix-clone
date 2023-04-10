'use client';
import React, { useRef }  from 'react';
import { AiFillCaretRight, AiOutlineArrowRight } from 'react-icons/ai'
import { authContext, useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetStarted() {
  const email:React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const route = useRouter();
  const {getEmail} = useAuth() as authContext
  function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    if(email.current ===null || !email.current.value)
    { 
      toast.error("Email was badly formatted");    
      return;
      };
      const {value} = email.current;
     
    getEmail(value as string);
    route.push('/signUp');
  }
  return (
    <>
      <ToastContainer position='top-right' theme='colored' />
       <h3 className='text-lg font-semibold'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form onSubmit={handleSubmit}  className='flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-2 w-full items-center justify-center'>
            <div  className='shrink-0 md:w-[50%] w-[80%] min-w-[100px] max-w-[400px]'>
           
            <input type="text" name='email'  ref={email}  id='email' placeholder="Email Address" className='md:py-2 md:text-[1.5rem] md:px-3 p-3 w-[100%] border border-solid border-mid-gray focus:bg-[rgba(0,0,0,0.82)] focus:border-mid-gray focus:border-2  bg-[rgba(0,0,0,0.82)] text-[rgb(159,156,156)] rounded-md'/>
                
            </div>
                 <button className='flex-grow-0 px-3 py-2 rounded-md bg-primary-red text-[1.15rem]  md:text-[1.5rem]  text-[#fff] cursor-pointer hover:bg-[rgba(172,15,18,0.94)] transition-all duration-200 ease-in'>
                 Get Started 
                 <span>
                <AiFillCaretRight color='#fff' size={20} className='inline'/>
                 </span>
                 </button>
           
        </form>
    </>
  )
}

export default GetStarted

