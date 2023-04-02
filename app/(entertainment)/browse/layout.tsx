import TrailerProvider from '@/app/context/TrailerContext'
import React from 'react'

function BrowseLayout({children}:{children:React.ReactNode}) {
  return (
   <>
   <TrailerProvider>
    {children}
   </TrailerProvider>
   </>
  )
}

export default BrowseLayout