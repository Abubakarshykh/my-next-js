import React from 'react'
import Image from 'next/image'

export default function Searchbar() {
  return (
  <>
  <div className=' '>
  <form action="" className="flex items-center pt-3">
    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[45%] pl-10   " placeholder="Search" required/>
    </div>
    <button type="button" className="flex bg-white focus:ring-4 focus:outline-none focus:ring-gray-100 hover:bg-gray-100 border border-gray-200 font-medium text-gray-500 rounded-lg text-sm px-6 py-2 gap-2 justify-center text-center items-center mb-2 mx-3">
        <Image 
        src="/images/menu.png" 
        width={24} 
        height={20} alt="" 
        className="w-6 h-3"/>
        Filters
      </button>
      <button type="button" className="space-x-3  bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
        

        Columns
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>

        <Image src="/images/downarrow.png" width={20} height={20} alt=""/>
      </button>
      </form>
      </div>
  </>
  )
}
