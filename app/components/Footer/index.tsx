import React from 'react'

function Footer() {
  return (
   <>
    <hr className={'h-[5px] border-mid-gray border-solid border-t-[6px] '}/>
    <footer className='w-full px-7 py-2 mt-3 underline text-[1.1rem] text-[#838383]'>
        <p>Questions? Contact us.</p>
        <div className='grid grid-cols-1 mt-5 gap-[calc(0.5rem+1vw)] sm:grid-cols-2 lg:grid-cols-4 w-full'>
        <div className='space-y-2'>
            <p>FAQ</p>
            <p>Media center</p>
            <p>Terms of use</p>
            <p>Contact us</p>
        </div>
        <div className='space-y-2'>
            <p>Gift card Terms</p>
            <p>Investor Relations</p>
            <p>Privacy</p>
            <p>Speed Test</p>
        </div>
        <div className='space-y-2'>
            <p>Help center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
        </div>
        <div className='space-y-2'>
            <p>Account</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Only on Netflix</p>
        </div>
        </div>
    </footer>
   </>
  )
}

export default Footer