import Image from "next/image";
import Navbarhead from "./Navbarhead";
import After_searchbar from "./After_searchbar";
import Navbar_settings from "./Navbar_settings";


export default function Settings_head() {
  return (
    <>
     <div className='container mx-auto px-4'>
        <span className='flex space-x-8'>
        <Image src="/images/darkhome_icon.png" alt='' width={20} height={20} className='w-4 h-5 my-2'/>
        <Image src="/images/arrow.png" alt='' width={20} height={20} className='w-3 h-4 my-[0.6rem]'/>
        <h3 className='text-[#084cd0] font-medium pt-1 text-lg'>Settings</h3>
 </span>    
 
 <span className='flex'>
    <h1 className='md:text-2xl font-medium my-1 tracking-wider'>Settings</h1>
      </span> 
    <Navbar_settings/>

</div>
{/* <Navbarhead/> */}

    </>
  )
}
