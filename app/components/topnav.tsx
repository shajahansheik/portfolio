import Link from 'next/link'
import React from 'react'

export default function TopNav() {
  return (
    <div className='flex items-center justify-between px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <div className='w-14 h-14 text-3xl font-bold bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center' >S</div>
        <div className='text-xl'><Link href='/'><span>Shajahan Shaik</span></Link></div>
      </div>
      <div className='flex space-x-5'>
        <div><Link href='/resume' className='text-gray-600 hover:text-black'>Resume</Link></div>
        <div><Link href='/projects' className='text-gray-600 hover:text-black'>Projects</Link></div>
        <div><Link href='/contact' className='text-gray-600 hover:text-black'>Contact</Link></div>
      </div>
    </div>
  )
}
