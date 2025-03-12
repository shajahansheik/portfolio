import Link from 'next/link'
import React from 'react'

export default function TopNav() {
  return (
    <div>
        <div>
            <span>Shajahan Shaik</span>
        </div>
        <div>
            <Link href='/resume'>Resume</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    </div>
  )
}
