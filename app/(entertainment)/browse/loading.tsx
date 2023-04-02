
import React from 'react'

function loading() {
  let items = new Array(8).fill('');
  let para= new Array(6).fill('');
  return (
    <>
    <header className={'h-[31.25rem] w-full relative '}>
    <div className="absolute left-[1.875rem] top-[9rem] h-[12.5rem] w-[70%] animate-pulse">
      <div className='w-full p-4 h-4 rounded-md bg-mid-gray'></div>
     
      <div className='mt-[1.5rem] grid grid-cols-1 gap-1'>
      {
        para.map((item, index)=>(
          <div key={index} className='h-2 w-full rounded p-2 bg-mid-gray'></div>
        ))
      }
      </div>
      <div className="flex space-x-4 h-16 items-center">
        <div className='w-16 h-8 p-4 rounded-md bg-mid-gray'></div>
        <div className='w-16 h-8 p-4 rounded-md bg-mid-gray'></div>
      </div>
    </div>
    </header>
   <main className={'min-h-[100vh] h-[600px] min-w-full'}>
    {items.map((item, index)=>(
      
      <div key={index} className='h-[250px] bg-[#000] min-w-full'>
        <div className='h-[10px] w-[5rem] rounded bg-primary-black mb-4'></div>
        <section className='row ml-[1.5rem] animate-pulse flex space-x-4 overflow-scroll items-center'>
          {items.map((item, index)=>(
            <div key={index} className='h-[200px] w-[200px] bg-mid-gray shrink-0'>

            </div>
          ))}
        </section>
        </div>
      
    
    ))}
   </main>
  
   </>
  )
}

export default loading