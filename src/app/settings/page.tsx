"use client"
import { Button } from '@/components/ui/button'
import { LogOutIcon, MoveLeft } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Page() {
  return (
    <div className="absolute bottom-3 end-3">
        <Button onClick={()=>signOut()} className='p-6 rounded-full'>
          <LogOutIcon />
        </Button>
    </div>
  )
}