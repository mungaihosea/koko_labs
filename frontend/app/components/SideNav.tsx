import SideNavItem from "./SideNavItem";
import { LuLayoutDashboard, LuAlignStartVertical, LuAlarmClockOff } from "react-icons/lu";
import Logo from "@/app/logo.png"
import Image from "next/image";
import { SlOrganization } from "react-icons/sl";
import { FaMedal } from "react-icons/fa";
import { AiOutlineBarChart } from "react-icons/ai";


export default function SideNav(){
    return (
        <div className="py-3 h-full border border-gray-100 w-64 bg-gray-100">
            <div className="flex justify-center items-center gap-3 mb-5">
                <img src="/kokologo.png" width={100} className="mr-3" alt="Koko Logo" />
            </div>
            <SideNavItem title={'Dashboard'} icon={<LuLayoutDashboard />} path={'/'} />
            <SideNavItem title={'Transactions'} icon={<LuAlignStartVertical />} path={'/transactions'} />
            <SideNavItem title={'Recurring Transactions'} icon={<LuAlignStartVertical />} path={'/recurring_transactions'} />
            {/* <SideNavItem title={'Expense categories'} icon={<LuLayoutDashboard />} path={'/expenses'} /> */}
            <SideNavItem title={'Goals'} icon={<FaMedal />} path={'/goals'} />
            <SideNavItem title={'Reports'} icon={<AiOutlineBarChart />} path={'/reports'} />
        </div>
    )
}



