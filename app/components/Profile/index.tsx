import { IUser } from '@/app/types';
import React from 'react'
type props ={
    user: IUser
}
function Profile({user}:props) {
  return (
   <main>
   <h1>Who is Watching ?</h1>
   </main>
  )
}

export default Profile;