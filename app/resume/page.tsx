import React from 'react'
import Experience from '../components/experience'
import Education from '../components/education'
import Skills from '../components/skills'

export default function page() {
  return (
    <div>
      <div className='px-60 text-3xl'>Resume</div>
      <div>
        <Experience/>
        <Education/>
        <Skills/>
      </div>
    </div>
  )
}
