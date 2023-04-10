'use client';
import React from 'react'
import Tv from '../Tv';
import Download from '../Download';
import Kids from '../Kids';
import Video from '../Video';
import {motion} from 'framer-motion';
type props= {
    h2:string;
    h3:string;
    index:number;
}
function HomeSection({h2, h3, index}:props) {
  return (
    <>
    <hr className={'h-[5px] border-mid-gray border-solid border-t-[6px] '}/>
  <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}}  transition={{ease:"easeIn", delay:0.12, duration:0.33}} className={`  lg:h-[400px] h-[600px] text-center lg:text-left bg-[#000] flex ${index %2  !== 0 ? 'lg:flex-row-reverse':'lg:flex-row'} flex-col items-center w-[100%] lg:w-[80%] mx-auto`}>
    <div className={'p-8 lg:p-0 overflow-hidden'}>
    <h2 className={'md:text-[2.9rem] leading-[3.1rem] mb-4 font-bold text-3xl'}>{h2}</h2>
    <h3 className={'md:text-2xl  font-extralight text-xl'}>{h3}</h3>
    </div>
    <div className={'h-[350px] relative w-[100%]'}>
        {index === 0 && <Tv><Video/></Tv>}
        {index=== 1 && <Download/>}
        {index === 2 && <Tv><div>'tv is cool'</div></Tv>}
        {index === 3 && <Kids/>}
    </div>
    
  </motion.section>
  </>
  )
}

export default HomeSection