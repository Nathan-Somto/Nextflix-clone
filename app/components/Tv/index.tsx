import Image from 'next/image'
import React from 'react'
function Tv({children}:{children:React.ReactNode}) {
  return (
    <div className='relative h-[350px] w-[80%] mx-auto overflow-hidden lg:w-[100%]'>
        <Image src={'/tv.png'} alt={'tv'} fill={true} className={'z-[2]'}/>
       <div className='absolute top-[45%] left-[50%] z-[1] w-[73%] -translate-y-[50%] -translate-x-[50%] max-h-[65%] h-auto'>
       {children}
        </div> 
   
    </div>
  )
}

export default Tv