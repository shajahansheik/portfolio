import Link from 'next/link'
import React from 'react'

export default function TopNav() {
  return (
    <div>
        <div>
        <Link href='/'><span>Shajahan Shaik</span></Link>
        </div>
        <div>
            <Link href='/resume'>Resume</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}
