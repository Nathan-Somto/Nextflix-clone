import Image from 'next/image'
import React from 'react'

function Nav() {
    /** 
     *  @todo: add the functionality for sign in
     * create the auth provider context
     */
  return (
   <nav className='flex h-16 w-[80%] mx-auto justify-between items-center  bg-[rgba(0,0,0,0)] z-[10] relative top-0'>
    <Image src={'/logo.png'} alt={'netflix logo'} height={150} width={150} />
    <button className='  px-3 py-1 rounded-md bg-primary-red text-[#fff] cursor-pointer hover:bg-[rgb(122,18,20)] transition-all duration-200 ease-in'>sign in</button>
   </nav>
  )
}

export default Nav