import Image from 'next/image'
import React from 'react'
function Tv({children}:{children:React.ReactNode}) {
  return (
    <div className='relative h-[350px] w-[80%] mx-auto lg:w-[100%]'>
        <Image src={'/tv.png'} alt={'tv'} fill={true} className={'z-[2]'}/>
       <div className='absolute top-[50%] left-[50%] z-[5] w-full h-full'>
       {children}
        </div> 
   
    </div>
  )
}

export default Tv