'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function TopNav() {
  const pathName = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  function getTextColor(path: any) {
    if (path == pathName) {
      return 'text-violet-600 hover:text-violet-400 font-semibold'
    }
    return 'text-gray-600 hover:text-black'
  }

  return (
    <nav className='flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 md:py-5 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 animate-slide-in-left'>
      <div className='flex items-center space-x-2 sm:space-x-3'>
        <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-float cursor-pointer flex-shrink-0'>
          S
        </div>
        <div className='text-base sm:text-lg md:text-xl'>
          <Link href='/' className='hover:text-violet-600 transition-colors duration-300'>
            <span className='font-semibold whitespace-nowrap'>Shajahan Shaik</span>
          </Link>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex space-x-6 lg:space-x-8'>
        <Link 
          href='/resume' 
          className={`${getTextColor('/resume')} transition-all duration-300 hover:scale-105 relative group whitespace-nowrap`}
        >
          Resume
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href='/projects' 
          className={`${getTextColor('/projects')} transition-all duration-300 hover:scale-105 relative group whitespace-nowrap`}
        >
          Projects
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href='/contact' 
          className={`${getTextColor('/contact')} transition-all duration-300 hover:scale-105 relative group whitespace-nowrap`}
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-300 flex-shrink-0'
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={mobileMenuOpen}
      >
        <svg 
          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden animate-fade-in z-50'>
          <div className='flex flex-col space-y-1 p-4'>
            <Link 
              href='/resume' 
              className={`${getTextColor('/resume')} py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 text-base`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </Link>
            <Link 
              href='/projects' 
              className={`${getTextColor('/projects')} py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 text-base`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href='/contact' 
              className={`${getTextColor('/contact')} py-3 px-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 text-base`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
