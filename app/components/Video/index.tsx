import React from 'react'

function Video() {
  return (
    <video width="100%" height="100%" autoPlay={true} loop={true} playsInline={true} muted={true}>
    <source src="/netflix_video.m4v" type="video/mp4"/>
   

  </video>
  )
}

export default Video