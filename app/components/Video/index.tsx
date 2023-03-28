import React from 'react'

function Video() {
  return (
    <video width="100%" height="100%" autoPlay playsInline muted>
    <source src="/netflix_video.m4v" type="video/mp4"/>
   

  </video>
  )
}

export default Video