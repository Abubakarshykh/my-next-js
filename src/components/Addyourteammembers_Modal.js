import React from 'react'
import Modal_table_addteammember from '@/components/Modal_table_addteammember'
import Image from 'next/image'

export default function Addyourteammembers_Modal(props) {
    return (
        <>
            {/* <!-- Modal toggle --> */}
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                className=" ml-auto text-gray-500 hover:text-blue-400 font-medium rounded-lg md:text-sm text-xs  md:px-5 px-1 md:py-2.5 text-center inline-flex items-center md:mr-2  mr-9 mb-2 "
                type="button">
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
                
            </button>
            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-lg max-h-full">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent
                     hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5
                      ml-auto inline-flex items-center dark:hover:bg-gray-800
                       dark:hover:text-white"
                            data-modal-hide="authentication-modal">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <div className="flex -space-x-3 text-center justify-center">
                                {/* <Image src="Settingsimg/Avatar (6).png" alt=""className="w-15 h-15 z-50"/> */}
                                <Image src="/Settingsimg/Avatar (7).png" alt="" width={35} height={35}  className="mt-2 z-20" />
                                <Image src="/Settingsimg/Avatar (8).png" alt="" width={40} height={40} className=" z-50" />
                                <Image src="/Settingsimg/Avatar (9).png" alt="" width={35} height={35} className="mt-2  z-20" />
                                {/* <Image src="Settingsimg/Avatar (10).png" alt="" className="w-15 z-10"/> */}
                            </div>
                            <h1 className="text-md font-medium py-3 text-center">Add your team members</h1>
                            <p className="text-center text-gray-600 pt-1 pl-12 pr-12 pb-2">You’ve created a new project! Invite colleagues to collaborate on this project.</p>
                            <div className="relative ">
                                <table className="w-full h-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-t-lg rounded">
                                    <tbody>
                                        <Modal_table_addteammember
                                            names={['Candice Wu', 'Demi Wilkinson', 'Drew Cano', 'Natali Crag']}
                                            Email={['@canice', '@demi', '@drew', '@natali']}
                                            Roles={['Lead Admin', 'User Admin']} />
                                    </tbody>
                                </table>
                            </div>
                            <form className="space-y-6" action="#">
                                <div className="space-x-2 px-8 flex">
                                    <button data-modal-hide="authentication-modal" type="button" className="w-[50%] text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border">Cancel</button>
                                    <button data-modal-hide="authentication-modal" type="button" className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to project</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
