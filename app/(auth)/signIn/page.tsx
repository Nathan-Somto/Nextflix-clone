import Hero from '@/app/components/Hero'
import SignIn from '@/app/components/SignIn'
import React from 'react'

function signIn() {
  return (
  <Hero homepage={false}>
    <SignIn signUpPage={false}/>
  </Hero>
  )
}

export default signIn