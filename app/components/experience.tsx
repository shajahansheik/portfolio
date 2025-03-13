import React from 'react'

export default function Experience() {
  return (
    <div className=' grid grid-cols-3'>
      <div className='px-64 text-lg'>Work <br/>Experience</div>
      <div className='space-y-8 col-span-2'>
        <div className='grid grid-cols-3 gap-10 text-sm'>
          <div className='text-right text-gray-500'>Oct 2024 - Present</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            <div className='font-semibold text-sm'> Software Developer | <br/> Health Net Global </div>
            <p className='text-sm '>Lead the development of an EMR project using Angular, Material, and Tailwind CSS, creating components, services, and modules for patient management. Built and integrated APIs with Nest.js for seamless interaction with MongoDB and the frontend. Utilized XState for state management, Temporal for task automation, and Hasura and GraphQL for efficient data handling. Developed responsive user interfaces and collaborated with teams to ensure project success.</p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Feb 2024 - Oct 2024</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            <div className='font-semibold text-sm'> Software Development Engineer | <br/> Opstronomy Health Technologies Private Limited </div>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, expedita.</p>
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Jul 2021 - Jan 2024</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            <div className='font-semibold text-sm'> Software Development Engineer | <br/> Health Net Global </div>
            <p className='text-sm'>Developed and maintained patient medical record web applications using Next.js and Nest.js, with data sourced from backend services in JSON format. Designed responsive interfaces with Tailwind CSS and created dynamic data visualizations using ECharts. Integrated WhatsApp messaging via Twilio and generated PDFs using Puppeteer. Implemented media queries for responsive design and added side navigation for enhanced user experience. Collaborated with cross-functional teams to deliver robust and user-friendly solutions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
