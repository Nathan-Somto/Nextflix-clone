import Nav from '@/app/components/Nav';
import Profile from '@/app/components/Profile';
import db from '@/app/lib/firebase.config'
import { IUser } from '@/app/types';
import { DocumentData, collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'

 async function getUserProfiles(user:string,id:string){
  /* 
  * at request time this function is run to get the verified user in our db
   */
  try{
const q = query(
        collection(db, "users"),
        where('uid','==',id)
      );
      const doc = await getDocs(q);
      return doc.docs[0].data()
  }
  catch(err){

  }
}
type props ={
params:{
  user:string,
  id:string
  }
}
export default async function Page({params}:props) {
  const {user,id} = params;
  const data:IUser = await getUserProfiles(user,id) as DocumentData as IUser;
  return (
    <>
  <Nav/>
  <Profile user={data}/>
    </>
  )
}

