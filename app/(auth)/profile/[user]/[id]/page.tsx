import Nav from '@/app/components/Nav';
import Profile from '@/app/components/Profile';
import db from '@/app/lib/firebase.config'
import { IUser } from '@/app/types';
import { DocumentData, collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'

 async function getUserProfiles(user:string,id:string):Promise<userProfiles | undefined>{
  /* 
  * at request time this function is run to get the verified user in our db
   */
  try{
const q = query(
        collection(db, "users"),
        where('uid','==',id)
      );
      const doc = await getDocs(q);
      return {data:doc.docs[0].data(), uid:doc.docs[0].id};
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
type userProfiles={
  data:DocumentData;
  uid:string;
}
export default async function Page({params}:props) {
  const {user,id} = params;
  const userData = await getUserProfiles(user,id)  as userProfiles;
  if(userData === undefined) return <div> there was an error</div>;
  const {data,uid} = userData;
  return (
    <>
  <Nav/>
  <Profile user={data as DocumentData as IUser} id={uid}/>
    </>
  )
}

