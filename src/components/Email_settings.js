import Teammembers_modal from "./Teammembers_modal";


export default function Email_settings() {
  return (
    <>
    <div className="md:space-y-4 space-y-2 sm:space-y-2">
     <div class="relative ">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5}
                    stroke="currentColor" 
                    className="w-6 h-6 text-gray-400">
                       <path 
                       strokeLinecap="round" 
                       strokeLinejoin="round" 
                       d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                       </svg>
                       </div>
                <input 
                type="text" 
                id="email-address-icon" 
                className="border border-gray-300 w-full text-gray-900 text-sm rounded-lg
                 focus:ring-gray-400 focus:border-gray-400 block max-w-full pl-10 py-1.5  " 
                 placeholder="you@example.com"/>
                </div>

                <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5}
                    stroke="currentColor" 
                    className="w-6 h-6 text-gray-400">
                       <path 
                       strokeLinecap="round" 
                       strokeLinejoin="round" 
                       d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                       </svg>
                       </div>
                <input 
                type="text" 
                id="email-address-icon" 
                className="border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-gray-400 focus:border-gray-400 block w-full pl-10 py-1.5  " 
                 placeholder="you@example.com"/>
                </div>

                <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5}
                    stroke="currentColor" 
                    className="w-6 h-6 text-gray-400">
                       <path 
                       strokeLinecap="round" 
                       strokeLinejoin="round" 
                       d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                       </svg>
                       </div>
                <input 
                type="text" 
                id="email-address-icon" 
                className="border border-gray-300 text-gray-900 text-sm rounded-lg
                 focus:ring-gray-400 focus:border-gray-400 block w-full pl-10 py-1.5  " 
                 placeholder="you@example.com"/>
                </div>
                <div className="flex space-x-2 py-1">
                
                {/* <button className="">Add another</button> */}
                {/* <Teammembers_modal/> */}
                </div>
                </div>


    </>
  )
}
