import Image from "next/image";
import Button_menu from "./Button_menu";
import Input from "./Input";
import Pagination from "../Pagination";


export default function Team_table(props) {
  return (
    <>

    

                    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-4">
    <table class="w-screen text-sm text-left text-gray-500  h-[5rem] max-h-full">
        <thead class="text-sm font-normal uppercase bg-white ">
            <tr className="">
                <th scope="col" class=" flex px-2 py-2 text-xs font-medium  text-gray-500">
                    <Image src='/images/_Checkbox base.png' alt='' width={20} height={20} className='mx-2 w-[1.2rem] h-[1.2rem]' />
                Name
                <svg 
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-600 my-[2px] mx-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                    </svg>

                </th>
                <th scope="col" class="px-2 py-3 text-gray-500 font-medium text-xs">
                Email
                </th>
                <th scope="col" class="px-3 py-3 text-gray-500 font-medium text-xs">
                Phone number
                </th>
                <th scope="col" class="px-2 py-3 text-gray-500 font-medium text-xs">
                Company name
                </th>
                <th scope="col" class="px-2 py-3 text-gray-500 font-medium text-xs">
                User role
                </th>
                <th scope="col" class="px-2 py-3 text-gray-500 font-medium text-xs">
                Date created
                </th>
                <th scope="col" class="px-6 py-3 text-gray-500 font-medium text-xs">
                Last login
                </th>
                <th className="px-6">
                    <Button_menu/>
                </th>
            </tr>
        </thead>
        <tbody>

            <tr class="border-b bg-blue-50 dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-4 py-2 gap-2 flex font-medium whitespace-nowrap dark:text-white">
                    <Input/>
                    <Image 
                    src={'/Settingsimg/Avatar (1).png'}
                    width={30}
                    height={30}
                    className="w-auto h-auto"
                    />
                    <span className="py-2 text-md text-gray-600"> 
                    {props.name[0]}
                    </span> 
                </td>
                <td class="px-2 ">
                    {props.email[0]}
                </td>
                <td class="px-3 ">
                    {props.phone[0]}
                </td>
                <td class="px-2">
                    {props.company[0]}
                </td>
                <td class="px-2 ">
                    {props.User[0]}
                </td>
                <td class="px-2">
                    {props.date[0]}
                </td>
                <td class="px-6 ">
                    {props.lastlogin[0]}
                </td>
                <td class="px-6">
                    <Button_menu/>
                </td>
            </tr>
            <tr class="border-b bg-blue-50 dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-4 py-2 gap-2 flex font-medium whitespace-nowrap dark:text-white">
                    <Input/>
                    <Image 
                    src={'/Settingsimg/Avatar (2).png'}
                    width={30}
                    height={30}
                    className="w-9 h-9 "
                    />
                    <span className="py-2 text-md text-gray-600"> 
                    {props.name[1]}
                    </span> 
                </td>
                <td class="px-2 py-4">
                    {props.email[1]}
                </td>
                <td class="px-3 py-4">
                    {props.phone[1]}
                </td>
                <td class="px-2 py-4">
                    {props.company[1]}
                </td>
                <td class="px-2 py-4">
                    {props.User[1]}
                </td>
                <td class="px-2 py-4">
                    {props.date[1]}
                </td>
                <td class="px-6 py-4">
                    {props.lastlogin[1]}
                </td>
                <td class="px-6 py-4">
                    <Button_menu/>
                </td>
            </tr>
            <tr class="border-b bg-blue-50 dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-4 py-2 gap-2 flex font-medium whitespace-nowrap dark:text-white">
                    <Input/>
                    <Image 
                    src={'/Settingsimg/Avatar (3).png'}
                    width={30}
                    height={30}
                    className="w-9 h-9 "
                    />
                    <span className="py-2 text-md text-gray-600"> 
                    {props.name[2]}
                    </span> 
                </td>
                <td class="px-2 py-4">
                    {props.email[2]}
                </td>
                <td class="px-3 py-4">
                    {props.phone[2]}
                </td>
                <td class="px-2 py-4">
                    {props.company[2]}
                </td>
                <td class="px-2 py-4">
                    {props.User[0]}
                </td>
                <td class="px-2 py-4">
                    {props.date[2]}
                </td>
                <td class="px-6 py-4">
                    {props.lastlogin[2]}
                </td>
                <td class="px-6 py-4">
                    <Button_menu/>
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-4 py-2 gap-2 flex font-medium whitespace-nowrap dark:text-white">
                    <Input/>
                    <Image 
                    src={'/Settingsimg/Avatar (4).png'}
                    width={30}
                    height={30}
                    className="w-9 h-9 "
                    />
                    <span className="py-2 text-md text-gray-600"> 
                    {props.name[3]}
                    </span> 
                </td>
                <td class="px-2 py-4">
                    {props.email[3]}
                </td>
                <td class="px-3 py-4">
                    {props.phone[3]}
                </td>
                <td class="px-2 py-4">
                    {props.company[3]}
                </td>
                <td class="px-2 py-4">
                    {props.User[1]}
                </td>
                <td class="px-2 py-4">
                    {props.date[3]}
                </td>
                <td class="px-6 py-4">
                    {props.lastlogin[3]}
                </td>
                <td class="px-6 py-4">
                    <Button_menu/>
                </td>
            </tr>
            <tr class="border-b dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-4 py-2 gap-2 flex font-medium whitespace-nowrap dark:text-white">
                    <Input/>
                    <Image 
                    src={'/Settingsimg/Avatar (5).png'}
                    width={30}
                    height={30}
                    className="w-9 h-9 "
                    />
                    <span className="py-2 text-md text-gray-600"> 
                    {props.name[4]}
                    </span> 
                </td>
                <td class="px-2 py-4">
                    {props.email[4]}
                </td>
                <td class="px-3 py-4">
                    {props.phone[4]}
                </td>
                <td class="px-2 py-4">
                    {props.company[0]}
                </td>
                <td class="px-2 py-4">
                    {props.User[1]}
                </td>
                <td class="px-2 py-4">
                    {props.date[4]}
                </td>
                <td class="px-6 py-4">
                    {props.lastlogin[4]}
                </td>
                <td class="px-6 py-4">
                    <Button_menu/>
                </td>
            </tr>
            <tr class="border-b bg-blue-50 dark:bg-gray-800 dark:border-gray-700">
                <td scope="row" class="px-4 py-2 gap-2 flex font-medium whitespace-nowrap dark:text-white">
                    <Input/>
                    <Image 
                    src={'/Settingsimg/Avatar (6).png'}
                    width={30}
                    height={30}
                    className="w-9 h-9 "
                    />
                    <span className="py-2 text-md text-gray-600"> 
                    {props.name[5]}
                    </span> 
                </td>
                <td class="px-2 py-4">
                    {props.email[5]}
                </td>
                <td class="px-3 py-4">
                    {props.phone[5]}
                </td>
                <td class="px-2 py-4">
                    {props.company[1]}
                </td>
                <td class="px-2 py-4">
                    {props.User[0]}
                </td>
                <td class="px-2 py-4">
                    {props.date[5]}
                </td>
                <td class="px-6 py-4">
                    {props.lastlogin[5]}
                </td>
                <td class="px-6 py-4">
                    <Button_menu/>
                </td>
            </tr>
            {/* <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <Pagination/>
            </tr> */}
            
        </tbody>
    </table>
</div>

             

    </>
  )
}
