import Image from 'next/image'
import React from 'react'

function Download() {
  return (
   <div className='relative lg:h-[350px] h-[300px] w-full md:w-[600px] mx-auto lg:w-[80%] '>
    <Image src={'/stranger_things.jpg'} alt={' stranger things'} fill={true}/>
    <div className='bottom-[5%] bg-[#000] left-0 right-0 mx-auto p-4 h-[5.5rem] lg:w-[40%] w-[65%] min-w-[275px] border border-solid border-mid-gray rounded-xl absolute flex items-center justify-center space-x-3'>
      <Image src={'/stranger_things_poster.png'} alt='poster' height={70} width={60}/>
      <p className='text-[1.1rem] text-[#4242e3]'>Downloading...</p>
      <Image src={'/download_animation.gif'} height={50} width={50} alt="download animation gif"/>
    </div>
   </div>
  )
}

export default Download