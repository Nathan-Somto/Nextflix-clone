import Image from 'next/image'
import React from 'react'

function Kids() {
  return (
    <div className='relative h-[350px] lg:w-[80%] w-[100%] mx-auto'>
 <Image src={'/kids.png'} alt='kids ' fill={true}/>
 </div>
  )
}

export default Kids