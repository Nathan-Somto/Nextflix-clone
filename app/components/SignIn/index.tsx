'use client';
import Link from 'next/link'
import React from 'react'

function SignIn() {
  return (
    <form action="" method="post" className='bg-[rgba(0,0,0,0.81)] top-[50%] z-[10] left-[50%] absolute -translate-x-[50%] -translate-y-[50%] justify-center flex flex-col items-center space-y-4 rounded-xl px-5 py-1 h-[350px] max-[639px]:min-w-[300px] w-[70%] sm:w-[500px]'>
        <h3 className='font-semibold text-3xl absolute top-[8%]'>Sign In</h3>
        <label htmlFor="email" className='w-[80%] mx-auto'>
            <input type="text" placeholder='email' id="email" name='email' className='w-full py-5 px-6 rounded-md h-[30px]  ' />
            </label>
            <label htmlFor="password" className='w-[80%] mx-auto'>
                <input type="text" placeholder='password' id="password" name='password' className='w-full py-5 px-6 rounded-md h-[30px] ' />
                </label>
              
                <button className='px-3 py-2 w-[80%] mx-auto rounded-md bg-primary-red text-[1.15rem]  md:text-[1.25rem]  text-[#fff] cursor-pointer hover:bg-[rgba(172,15,18,0.94)] transition-all duration-200 ease-in'>Sign In</button>
                <div className="absolute bottom-[10%]">
                    <p className='font-medium text-[1.2rem] text-[rgb(141,140,140)]'>New to Netflix <Link href='/' className='text-[rgb(212,212,212)]'>sign up</Link> now</p>
                </div>
    </form>
  )
}

export default SignIn