import Hero from '@/app/components/Hero'
import SignIn from '@/app/components/SignIn'
import React from 'react'

function signUp() {
  return (
   <Hero homepage={false}>
    <SignIn signUpPage/>
  </Hero>
  )
}

export default signUp