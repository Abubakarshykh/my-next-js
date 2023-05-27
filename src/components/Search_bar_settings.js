import React from 'react'
import Addyourteammembers_Modal from './Addyourteammembers_Modal'

export default function Search_bar_settings() {
  return (
    <>
    <div className='flex border-b pb-3'>
        <div className=" ">
        
        <h2 className=' text-lg font-medium'>Team management</h2>
      <p className='text-sm font-light text-slate-400 tracking-wide'>Manage your team members here.</p>
      </div>
      
      {/* <button type="button" class="gap-2  ml-auto text-gray-500  border focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  mr-2 mb-2">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
      stroke="currentColor" 
      className="w-5 h-5">
     <path 
     strokeLinecap="round" 
     strokeLinejoin="round" 
     d="M12 4.5v15m7.5-7.5h-15" />
     </svg>

  Add team member
</button> */}
<Addyourteammembers_Modal/>
      
      </div>
      </>

  )
}
