import SideNav from "./SideNav"
import TopNav from "./TopNav"
import CreateTransaction from "../transactions/CreateTransaction"


export default function BaseLayout({ children }: any){

    return (
        <div className="flex h-screen ">
            <CreateTransaction />
            <div className="hidden fixed inset-y-0 md:block">
                <SideNav/>
            </div>
            <div className="flex-1 overflow-y-auto md:ml-64">
                <TopNav />
                <div className="p-5 container mx-auto md:p-10">
                    {children}
                </div>
            </div>
        </div>
    )
}