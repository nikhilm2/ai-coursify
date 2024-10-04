"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='flex items-center justify-between p-5 shadow-md'>
        <Image src={'/logo.svg'} width={70} height={50}/>
       <div className='flex items-center justify-end gap-2'>
        {isSignedIn?<Button><Link href={'/dashboard'}>Dashboard</Link></Button>:<SignInButton><Button>Get Started</Button></SignInButton>}
        
       {isSignedIn?<UserButton/>:""}
       </div>
    </div>
  )
}

export default Header