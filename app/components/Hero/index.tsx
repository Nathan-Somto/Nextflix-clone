import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
   <header className='h-[100vh] min-h-fit relative text-[#fff] -mt-16'>
    <Image src={'/Netflix_Background.jpg'} alt={'netflix banner'} fill={true} className='z-[5] object-cover'/> 
    <div className='absolute h-full w-full top-0 z-[6] bg-gradient-to-t bg-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]'></div>
    <div className='text-center top-[50%] left-[50%] mt-[5%] absolute -translate-x-[50%] -translate-y-[50%] flex flex-col space-y-6 z-[8] py-6 w-[90%]'>
        <h1 className='text-4xl lg:text-5xl font-bold mb-3'>Unlimited Movies, Tv shows and more.</h1>
        <h2 className='text-xl font-semibold lg:text-2xl mb-3'>Watch anywhere. Cancel anytime.</h2>
        <h3 className='text-lg font-semibold'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <form action="/" className='flex md:flex-row flex-col space-y-6 md:space-y-0 md:space-x-2 w-full items-center justify-center'>
            <div  className='shrink-0 md:w-[50%] w-[80%] min-w-[100px] max-w-[400px]'>
           {/*  <label htmlFor="email">Email Address </label> */}
            <input type="text" name='email' id='email'  className='md:py-2 md:text-[1.5rem] md:px-3 p-3 w-[100%]   bg-[rgba(0,0,0,0.82)] text-[rgb(159,156,156)] rounded-md'/>
                 <small className='text-primary-red font-semibold text-sm hidden'>Email is required</small>
            </div>
         
               
                
                 <input type="button" value="Get Started >"  className='flex-grow-0 px-3 py-2 rounded-md bg-primary-red text-[1.15rem]  md:text-[1.5rem]  text-[#fff] cursor-pointer hover:bg-[rgb(122,18,20)] transition-all duration-200 ease-in'/>
           
        </form>
    </div>

    </header>
  )
}

export default Hero