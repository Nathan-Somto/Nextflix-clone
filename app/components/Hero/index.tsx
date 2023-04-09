import Image from 'next/image'
import React from 'react'
import GetStarted from '../GetStarted'
function Hero({children,homepage}: {
  children: React.ReactNode, homepage:boolean}) {
  return (
   <header className={`h-[100vh] min-h-fit relative text-[#fff] ${homepage? '-mt-16':''} `}>
    <Image src={'/Netflix_Background.jpg'} alt={'netflix banner'} fill={true} className='z-[5] object-cover'/> 
    <div className='absolute h-full w-full top-0 z-[6] bg-gradient-to-t bg-[rgba(0,0,0,0.4)] from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)]'></div>
    <>
    {children}
    </>

    </header>
  )
}

export default Hero