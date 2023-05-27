import After_searchbar from "@/components/After_searchbar";
import Invite_settings from "@/components/Invite_settings";
// import Navbar_settings from "@/components/Navbar_settings";
import Settings_head from "@/components/Settings_head";
import Sidenav from "@/components/Sidenav";
import Table_settings from "@/components/Table_settings";


export default function Settins() {

  return (
    <>
    
          <Sidenav />
          <div class="bg-[#0d44b3] md:h-screen md:pl-6 md:pt-3 sm:ml-64" style={{scrollBehavior: 'smooth', cursor: 'smooth'}}>
            <div class="p-3 bg-white md:rounded-l-3xl h-full dark:border-gray-700">
              <div class="grid grid-cols-1 md:h-full ">
                <Settings_head/>
                <After_searchbar/>
                <Invite_settings/>
                <Table_settings
                Name={['Phoenix Baker', 'Lana Steiner', 'Candice Wu', 'Demi Wilkinson']}
                email={['phoenix@email.com', 'lanas@email.com', 'candice@email.com', 'wdemi@email.com']}
                Role={['Lead Admin', 'User Admin']}
                Team={['Charity Walkathon', 'Art Exhibition']}/>
                </div>
                </div>
                </div>
                </>
  )
}
