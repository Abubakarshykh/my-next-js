import Addyourteammembers_Modal from "./Addyourteammembers_Modal";
import Button_settings from "./Button_settings";
import Email_settings from "./Email_settings";
import Invitemodal from "./invitemodal";

export default function Invite_settings() {
  return (
    <>
    <div className=" grid md:grid-cols-3 sm:grid-cols-2 mx-4 pt-3">
        {/* grid_1 */}
        <div className=" w-[19rem] max-w-full">
            <h4 className="text-lg font-medium text-gray-600">Invite team members</h4>
            <p className="text-sm text-gray-400 pr-[3rem] hidden md:block">Get your projects up and running faster by inviting your team to collaborate</p>
        </div>
        {/* grid_2 */}
        <div className="">
            <Email_settings/>
            </div>
            <div className=" md:pl-4 text-center ">
                <Button_settings/>
            </div>
            </div>
            
            <div className="inline-flex py-4 md:py-0   w-screen max-w-full h-auto " >
              <Addyourteammembers_Modal/>
              <Invitemodal/>
            </div>
           
            

    </>
  )
}
