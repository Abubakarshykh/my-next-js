import React, { useState } from 'react'
import  Link  from 'next/link';
// import Headcount from './Headcount'
// import Event2 from './Headbox'
import Image from 'next/image'


 function Sidenav() {
   // Settings_lowerNav
   const [backgroundColor, setBackgroundColor] = useState('');

   function changeColor() {
       
     setBackgroundColor('#2f68d6');
   }

   // const [backgroundColor2, setBackgroundColor2] = useState('');

   // function changeColorbg() {
       
   //   setBackgroundColor2('#2f68d6');
   // }
   //   Headcount
      // const [backgroundColorheadcount, setBackgroundColorheadcount] = useState('');
    
      // function changeColorbg() {
      //    setBackgroundColorheadcount('#2f68d6]');
      // } 
  return (
   <>
   <div className='flex'>
    <button 
    data-drawer-target='separator-sidebar' 
    data-drawer-toggle='separator-sidebar' 
    aria-controls='separator-sidebar' 
    type='button' 
    className='inline-flex font-medium gap-3 items-center p-2 mt-2 ml-4 text-sm text-blue-800 rounded-lg 
    md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'>
    <span className='sr-only'>Open sidebar</span>
    <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
       <path 
       clip-rule='evenodd' 
       fill-rule='evenodd'
        d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'></path>
    </svg>
    CROWD WRK
 </button>
 
 <aside id='separator-sidebar' className='fixed top-0 left-0 z-40 md:w-[17rem] h-screen transition-transform -translate-x-full sm:translate-x-0' aria-label='Sidebar'>
    <div className='h-screen sm:h-screen px-3 overflow-y-auto bg-[#0d44b3]'>
        <span className='flex py-4'>
            <Image 
            src='/images/Group 5.png' 
            className=' text-white ml-5 w-6 h-6 my-2' 
            width={30} height={30} 
            alt=''/>
            <Link href='/Overview' className='text-white  flex text-xl font-medium px-2 pt-2'>CROWD<p className='text-white font-light text-lg '>WRK</p></Link>
        </span>
       <ul className='space-y-2 font-medium text-sm lg:pl-4 lg:pr-4'>
          <li>
            <form className='flex items-center'>   
               
                <div className='relative w-full'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                        <svg aria-hidden='true' className='w-5 h-5 text-white dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clip-rule='evenodd'></path></svg>
                    </div>
                    <input 
                    type='text' 
                    id='simple-search' 
                    className='bg-[#2f68d6] my-2 text-sm rounded-lg focus:ring-white focus:border-white
                    block w-full pl-10 p-2.5  border-0 font-light placeholder:text-white placeholder:font-light text-white
                    'placeholder='Search' 
                    />
                </div>
                </form>
          </li>
          <li>
             <Link href='/' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2f68d6] hover:text-dark '>
                
                <Image src='/images/Icon (1).png' alt='' width={15} height={15}/>
                <span className='flex-1 ml-3  text-white'>Dashboard</span>
                <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full '>Pro</span>
             </Link>
          </li>
          <li onClick={changeColor} >
          <Link href='/Overview'  >

            <div style={{backgroundColor}}   className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2f68d6] dark:hover:bg-gray-700'>
                <Image src='/images/Icon.png' width={15} height={15} alt='' />
                <span className='flex-1 ml-3  whitespace-nowrap text-white' >Headcount</span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>3</span>
                </div>
                </Link>

             
          </li>
          <li>
             <Link href='/' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2f68d6] dark:hover:bg-gray-700'>
                <Image src='/images/Icon (2).png' width={15} height={15} alt=''/>
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>Candidates</span>
             </Link>
          </li>
          <li>
             <Link href='/' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2f68d6] dark:hover:bg-gray-700'>
                
                <Image src='/images/Icon (3).png' alt='' height={15} width={15}/>
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>Scheduling</span>
             </Link>
          </li>
          <li>
             <Link href='#' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2f68d6] dark:hover:bg-gray-700'>
                
                <Image src='/images/Icon (4).png' alt='' width={15} height={15}/>
                <span className='flex-1 ml-3 whitespace-nowrap text-white'>Worker Welfare</span>
             </Link>
          </li>
       </ul>
       {/* After_space */}
       <ul className='pt-10 space-y-1 font-medium text-sm lg:pl-4 lg:pr-4'>
          <li>
             <Link href='#' className='flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-[#2f68d6] dark:hover:bg-gray-700 dark:text-white group'>
        
                <Image src='/images/Icon (5).png' alt='' width={15} height={15}/>
                <span className='ml-3 text-white'>Inbox</span>
             </Link>
          </li>
          <li>
             <Link href='#' className='flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-[#2f68d6] dark:hover:bg-gray-700 dark:text-white group'>
                <Image src='/images/Icon (6).png' width={15} height={15} alt=''/>
                <span className='ml-3 text-white'>Support</span>
             </Link>
          </li>
          <li  >
          <Link href='/Settins' >

            <div    className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#2f68d6] dark:hover:bg-gray-700'>
                <Image src='/images/Icon.png' width={15} height={15} alt='' />
                <span className='flex-1 ml-3  whitespace-nowrap text-white' >Settings</span>
                </div>
                </Link>

             
          </li>
          <hr className='w-full h-[1px]'/>
          <li className='text-white font-normal w-full  '>
            <div className=' w-full flex items-center pt-3'>
          <Image 
          src='/images/Avatar.png' 
          alt='Olivia Ryhe' 
          width={40} 
          height={40} 
          className= 'w-10 h-10'/>
          
            <div className='flex items-center justify-between w-full'>
            <h6 className="text-lg font-medium text-white mx-3">
                Olivia Rhye
              </h6>
            <Image 
            src='/images/shareicon.png' 
            width={15} 
            height={15} 
            alt='' 
            className='text-gray-400 cursor-pointer ml-auto'/>
            </div>
            </div>
            <p className="text-md mx-[3.2rem] text-gray-100 break-all">
            olivia@email.com
            </p>
           
          {/* <div className='flex items-center justify-between'>
            <Image src='/images/Avatar.png' alt='' width={40} height={40} className= 'w-10 h-10 mt-3 '/>
            <Link href={'/'} className='text-xs-semibold 2xl:text-lg-semibold text-white'>  Olivia Rhye</Link> 
            <Image src='/images/shareicon.png' width={15} height={15} alt='' className='cursor-pointer text-slate-700 w-3 h-3 mt-5 ml-auto'/>
          </div>
          <Link href={'/'} className='pl-[3.3rem] font-light text-lg text-gray-100'>olivia@email.com</Link> */}
          </li>
       </ul>
    </div>
 </aside>
 </div>


 



 
 </>

  )
}
export default Sidenav
