import SideNavItem from "./SideNavItem";
import { LuLayoutDashboard, LuAlignStartVertical, LuBuilding2, LuSettings, LuCheckCircle,LuSparkles, LuUsers2, LuSend, LuAlarmClockOff } from "react-icons/lu";
import Logo from "@/app/logo.png"
import Image from "next/image";
import { SlOrganization } from "react-icons/sl";


export default function SideNav(){
    return (
        <div className="py-3 h-full border border-gray-300 w-64 bg-gray-300">
            <div className="flex justify-center items-center gap-3 mb-5">
                <img src="/alfalogo.png" width={100} className="mr-3" alt="AlfaHr React Logo" />
            </div>
            <SideNavItem title={'Dashboard'} icon={<LuLayoutDashboard />} path={'/'} />
            <SideNavItem title={'Transactions'} icon={<LuAlignStartVertical />} path={'/timecards'} />
            <SideNavItem title={'Goals'} icon={<LuAlarmClockOff />} path={'/pto'} />
        </div>
    )
}



