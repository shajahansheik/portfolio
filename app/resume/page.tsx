import React from 'react'
import Experience from '../components/experience'
import Education from '../components/education'
import Skills from '../components/skills'
import BottomNav from '../components/bottomnav'

export default function page() {
  return (
    <div className='space-y-5 bg-gradient-to-br from-blue-50 via-white to-purple-50 h-full'>
      <div className='px-4 sm:px-8 lg:px-60 text-2xl sm:text-3xl font-bold gradient-text pt-6 animate-fade-in'>
        Resume
      </div>
      <div className='overflow-y-auto h-[calc(100%-8rem)] py-5 px-2 sm:px-4'>
        <div className='space-y-10 pb-8'>
          <div className='animate-fade-in delay-100'>
            <Skills/>
          </div>
          <div className='mx-4 sm:mx-8 lg:mx-16 text-gray-300'>
            <hr className='border-gray-300'/>
          </div>
          <div className='animate-fade-in delay-200'>
            <Experience/>
          </div>
          <div className='mx-4 sm:mx-8 lg:mx-16 text-gray-300'>
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
