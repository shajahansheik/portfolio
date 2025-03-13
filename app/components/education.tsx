import React from 'react'

export default function Education() {
  return (
    <div className=' grid grid-cols-3'>
      <div className='px-64 text-lg'>Education</div>
      <div className='space-y-8 col-span-2 text-sm'>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>2017 - 2020</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            <div className='font-semibold'> Master of Technology | <br /> TKR Engineering College, Affiliated with JNTUH </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, expedita.</p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>2013 - 2017</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            <div className='font-semibold'> Bachelor of Technology | <br /> Madhira Institute of Technology & Sciences, Affiliated with JNTUH </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, expedita.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
