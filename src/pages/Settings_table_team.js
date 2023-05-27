import After_searchbar from "@/components/After_searchbar";
import Search_bar_settings from "@/components/Search_bar_settings";
import Searchbar from "@/components/Searchbar";
import Team_table from "@/components/Settings/Team_table";
import Settings_head from "@/components/Settings_head";
import Sidenav from "@/components/Sidenav";


export default function Settings_table_team() {
  return (
    <>
    <Sidenav />
          <div class="bg-[#0d44b3] h-screen md:pl-6 md:pt-3 sm:ml-64">
            <div class="p-3 bg-white md:rounded-l-3xl h-full dark:border-gray-700">
              <div class="grid grid-cols-1 h-full ">
                <Settings_head/>
                {/* After_head */}
                <div className="px-4">
                <Search_bar_settings/>
                
                <Searchbar/>
                </div>
                {/* Table */}
                <Team_table
                name={['Olivia Rhye','Phoenix Baker','Lana Steiner','Demi Wilkinson','Candice Wu','Natali Craig']}
                email={['olivia@email.com','phoenix@email. com','lana@email. com','demi@email .com','candice@email .com','olivia@untitledui .com']}
                phone={['(555) 123-4567','(555) 987-6543','(555) 555-1212','(555) 867-5309','(555) 246-8100','(555) 333-4444']}
                company={['Bright Ideas Events Co.','Fusion Events & Co.','Elite Occasions Inc.','Sparkle Event Design Co.']}
                User={['Lead Admin','User Admin']}
                date={['10 Apr 2023','20 Jun 2023','15 Aug 2023','05 Sep 2023','01 Nov 2023','15 Jan 2024']}
                lastlogin={['15 Apr 2023','25 Jun 2023','18 Aug 2023','10 Sep 2023','03 Nov 2023','20 Jan 2024']}
                />


                </div>
                </div>
                </div>
                
    </>
  )
}
