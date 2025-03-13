import React from 'react'

export default function Skills() {
  return (
    <div className=' grid grid-cols-3'>
      <div className='px-64 text-lg'>Skills</div>
      <div className='space-y-4 col-span-2 text-sm'>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Languages</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            : JavaScript, HTML, CSS
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Frameworks</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            : Angular, Node.js, Nest.js, React, Next.js
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Databases</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            : MongoDB, SQL, PostgreSQl
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Technologies</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            : Git, GraphQL, Temporal, Hasura
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Data Visualization Tools</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            : Mongocharts, GoogleCharts, E-Charts
          </div>
        </div>
        <div className='grid grid-cols-3 gap-10'>
          <div className='text-right text-gray-500'>Cloud</div>
          <div className='space-y-2.5 col-span-2 pl-5 pr-10'>
            : GitHub Actions, AWS, AZURE
          </div>
        </div>
      </div>
      
    </div>
  )
}
