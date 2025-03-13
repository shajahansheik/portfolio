import React from 'react'
import Experience from '../components/experience'
import Education from '../components/education'
import Skills from '../components/skills'
import BottomNav from '../components/bottomnav'

export default function page() {
  return (
    <div className='space-y-5'>
      <div className='px-60 text-3xl'>Resume</div>
      <div className='overflow-scroll h-[41rem] py-5'>
      <div className='space-y-10  pb-8'>
        <Skills/>
        <div className='mx-16 text-gray-300'><hr/></div>
        <Experience/>
        <div className='mx-16 text-gray-300'><hr/></div>
        <Education/>
      </div>
      <BottomNav />
      </div>
    </div>
  )
}
