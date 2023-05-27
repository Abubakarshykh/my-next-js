import React from 'react'
// import { a } from 'react-router-dom';
import Link from 'next/link'

export default function Navbar_settings() {
  return (
    <>
     <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 my-3">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
      <button data-collapse-toggle="navbar-default" type="button" className="  inline-flex items-center my-2 text-sm text-blue-500 rounded-lg md:hidden focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className="hidden w-full md:block md:w-auto pb-3" id="navbar-default">
        <ul className="font-medium text-md flex flex-col  md:p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-10 md:mt-0 md:border-0 md:bg-white ">
          <li>
            <Link href='/'>
              <span 
              className=" text-gray-500 font-normal  ml-auto cursor-pointer hover:border-b-2 border-blue-500  md:hover:pb-[0.9rem]" 
              aria-current="page">Account</span>
                </Link>
          </li>
          <li>
            <Link 
            href='/'> 
            <span 
              className=" text-gray-500 font-normal ml-auto cursor-pointer hover:border-b-2 border-blue-500 md:hover:pb-[0.9rem]" 
              aria-current="page">Notifications</span>
                </Link>
          </li>
          <li>
            <Link 
            href='/'> 
            <span 
              className=" text-gray-500 font-normal ml-auto cursor-pointer hover:border-b-2 border-blue-500 md:hover:pb-[0.9rem]" 
              aria-current="page">Customization</span></Link>
          </li>
          <li>
            <Link 
            href='/Settings_table_team' 
            ><span 
              className=" text-blue-600 font-normal md:border-b md:pb-[0.9rem]  ml-auto cursor-pointer hover:border-b-2 border-blue-500 md:hover:pb-[0.9rem]" 
              aria-current="page">Team</span>
                </Link>
          </li>
          <li>
            <Link 
            href='/' >
            <span 
              className=" text-gray-500 font-normal  ml-auto cursor-pointer hover:border-b-2 border-blue-500 md:hover:pb-[0.9rem]" 
              aria-current="page">Billing</span></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </>
  )
}
