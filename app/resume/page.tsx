import React from 'react'
import Experience from '../components/experience'
import Education from '../components/education'
import Skills from '../components/skills'
import BottomNav from '../components/bottomnav'

export default function page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col'>
      <div className='px-4 sm:px-8 md:px-12 lg:px-60 text-xl sm:text-2xl md:text-3xl font-bold gradient-text pt-4 sm:pt-6 pb-3 sm:pb-4 animate-fade-in'>
        Resume
      </div>
      <div className='flex-1 overflow-y-auto py-3 sm:py-5 px-2 sm:px-4'>
        <div className='space-y-6 sm:space-y-8 md:space-y-10 pb-20 sm:pb-24'>
          <div className='animate-fade-in delay-100'>
            <Skills/>
          </div>
          <div className='mx-3 sm:mx-6 md:mx-10 lg:mx-16'>
            <hr className='border-gray-300'/>
          </div>
          <div className='animate-fade-in delay-200'>
            <Experience/>
          </div>
          <div className='mx-3 sm:mx-6 md:mx-10 lg:mx-16'>
            <hr className='border-gray-300'/>
          </div>
          <div className='animate-fade-in delay-300'>
            <Education/>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  )
}
