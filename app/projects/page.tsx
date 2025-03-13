import React from 'react'
import BottomNav from '../components/bottomnav'

export default function page() {
  return (
    <div className='space-y-5'>
      <div className='px-60 text-3xl'>Projects</div>
      <div className='overflow-scroll h-[41rem] py-5 space-y-4'>
        <div className='space-y-2  pb-8'>
          <div className='px-64 text-lg'>EMR</div>
          <div className='px-64 indent-10'>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus deserunt adipisci earum quibusdam saepe sapiente nostrum nihil ad molestiae excepturi nemo error fugiat ipsa deleniti, modi ea nesciunt. Error?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas quo nam quae dignissimos officia illo dolorem ipsum dolor iusto. Facilis, odio illum nemo explicabo ullam esse quis fugiat reiciendis.</p>
          </div>
        </div>
        <div className='mx-16 text-gray-300'><hr /></div>
        <div className='space-y-2  pb-8'>
          <div className='px-64 text-lg'>Smart Reports</div>
          <div className='px-64 indent-10'>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus deserunt adipisci earum quibusdam saepe sapiente nostrum nihil ad molestiae excepturi nemo error fugiat ipsa deleniti, modi ea nesciunt. Error?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas quo nam quae dignissimos officia illo dolorem ipsum dolor iusto. Facilis, odio illum nemo explicabo ullam esse quis fugiat reiciendis.</p>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  )
}
