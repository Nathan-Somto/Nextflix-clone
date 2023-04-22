import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function EntertainmentFooter() {
  return (
   <footer className="grid grid-cols-1 gap-y-3">
   <div className="flex space-x-3 ">
   <span><FaFacebook size={'25'}/></span>
   <span><FaInstagram size={'25'}/></span>
   <span><FaTwitter size={'25'}/></span>
   <span><FaYoutube size={'25'}/></span>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-mid-gray">
   <div>
  <p>Audio and Subtitles</p>
  <p>Audio Description</p>
  <p>Help center</p>
  <p>Gift Cards</p>
  </div>
  <div>
   <p>Media Center</p>
  <p>Investor Relations</p>
  <p>Job oppurtunities</p>
  </div>
 <div>
 <p>Terms of Use</p>
  <p>Security</p>
  <p>Legal Provisions</p>
 </div>
  <div>
<p>Cookie Preferences</p>
  <p>Corporate Information</p>
  <p>Contact us</p>
  </div>
  
  </div>
  <p>Service code</p>
  <p>© 1997-{new Date().getFullYear()} Netflix, inc {'{i-062d573a0ee099242}'}</p>
   </footer>
  )
}

export default EntertainmentFooter;