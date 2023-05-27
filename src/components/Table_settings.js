import Image from "next/image";
import Side_button_settings from "./Side_button_settings";

export default function Table_settings(props) {
  return (
    <>
    <div className="flex py-2 px-2">
    <div className="w-[30%] max-w-full h-[5rem] max-h-full md:block hidden">
        <h5 className="text-gray-600 font-medium">Team members</h5>
        <p className="text-gray-400 ">Manage your existing team and change roles/permissions</p>
        </div>
  <div class=" md:block hidden relative overflow-x-auto md:w-[70%] w-full max-w-full h-[10rem] max-h-full rounded-3xl border ">
    <table class="max-w-full text-left text-gray-500  dark:text-gray-400 ">
        <thead class=" text-gray-600 text-md font-light  bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3 ">
                    <span className="flex gap-2 font-normal text-gray-500">
                    <input type="checkbox" className="rounded p-1 border-gray-00 mx-2 my-1 text-blue-500"/>
                    Name
                    </span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span className="font-normal text-gray-500 flex gap-1">
                        Role
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-4 h-4 my-1"><path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        </span>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span className="font-normal text-gray-500 flex gap-1">
                        Team
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-4 h-4 my-1"><path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                        </span>
                </th>
                <th className="px-6">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            </th>
            </tr>
            </thead>
            <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-sm">
                <td scope="row" class="px-6 py-4 text-gray-700 whitespace-nowrap dark:text-white">
                <div className='flex '>
                <input type="checkbox" className="rounded border-blue-400 mx-2 my-3 p-1 text-blue-500"/>
                        <Image src='/Settingsimg/Avatar (1).png' alt='' width={40} height={40} className='w-9 h-9 my-1 mx-2' />
                        {`${props.Name[0]}`}<br /> {`${props.email[0]}`}
                    </div>
                </td>
                <td class="px-6 py-4">
                    {props.Role[0]}
                </td>
                <td class="px-6 py-4">
                    {props.Team[0]}
                </td>
                <td class="px-6 py-4">
                   <Side_button_settings/>
                </td>
            </tr>
            <tr class="border-b bg-gray-50 text-sm dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 text-gray-600 whitespace-nowrap dark:text-white">
            <div className='flex'>
                <input type="checkbox" className="rounded border-blue-400 mx-2 my-3 p-1  text-blue-500"/>
                        <Image src='/Settingsimg/Avatar (2).png' alt='' width={40} height={40} className='w-9 h-9 my-1 mx-2' />
                        {`${props.Name[1]}`}<br /> {`${props.email[1]}`}
                    </div>
                </td>
                <td class="px-6 py-4">
                    {props.Role[0]}
                </td>
                <td class="px-6 py-4">
                    {props.Team[1]}
                </td>
                <td class="px-6 py-4">
                   <Side_button_settings/>
                </td>
            </tr>
            <tr class="bg-white border-b text-sm dark:bg-gray-900 dark:border-gray-700">
            <td scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
            <div className='flex'>
                <input type="checkbox" className="rounded border-blue-400 mx-2 my-3 p-1  text-blue-500"/>
                        <Image src='/Settingsimg/Avatar (3).png' alt='' width={40} height={40} className='w-9 h-9 my-1 mx-2' />
                        {`${props.Name[2]}`}<br /> {`${props.email[2]}`}
                    </div>
                </td>
                <td class="px-6 py-4">
                    {props.Role[1]}
                </td>
                <td class="px-6 py-4">
                    {props.Team[0]}
                </td>
                <td class="px-6 py-4">
                   <Side_button_settings/>
                </td>
            </tr>
            <tr class="border-b text-sm bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
            <div className='flex'>
                <input type="checkbox" className="rounded border-blue-400 mx-2 my-3 p-1  text-blue-500"/>
                        <Image src='/Settingsimg/Avatar (4).png' alt='' width={40} height={40} className='w-9 h-9 my-1 mx-2' />
                        {`${props.Name[3]}`}<br /> {`${props.email[3]}`}
                    </div>
                </th>
                <td class="px-6 py-4">
                    {props.Role[1]}
                </td>
                <td class="px-6 py-4">
                    {props.Team[1]}
                </td>
                <td class="px-6 py-4">
                   <Side_button_settings/>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>
</div>

        
      
    </>
  )
}
