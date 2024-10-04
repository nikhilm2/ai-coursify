"use client"
import { Button } from '@/components/ui/button'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
   const signedIn = SignedIn
  return (
    <div className='flex items-center justify-between p-5 shadow-md'>
        <Image src={'/logo.svg'} width={70} height={50}/>
       <div className='flex items-center justify-end gap-2'>
        {signedIn?<Button>Dashboard</Button>:<Button>Get Started</Button>}
       
       {signedIn?<UserButton/>:""}
       </div>
    </div>
  )
}

export default Header