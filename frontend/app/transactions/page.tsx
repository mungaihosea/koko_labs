import { LuArrowLeft } from "react-icons/lu";
import BaseLayout from "../components/BaseLayout";
import TransactionList from "./TransactionList";
import Paginator from "../components/Paginator";
import TransactionTabs from "./TransactionTabs";
import { getTransactions } from "../api";
import { currentUser } from "@clerk/nextjs";
import { Badge } from 'antd';


export default async function Transactions({searchParams}:any){

    const loggedInUser = await currentUser()
    const transactions = await getTransactions({user: loggedInUser?.id, ...searchParams})


    return (
        <BaseLayout>
            <a href="/" className="text-xl font-bold mb-4 flex items-center gap-3 cursor-pointer">
                <LuArrowLeft /> Transactions <Badge count={transactions.count} showZero color="#52c41a"/>
            </a>

            <TransactionTabs />

            <TransactionList transactions={transactions} />

            <Paginator activePage={transactions.current_page} totalPages={transactions.num_pages} totalItems={transactions.count}/>

        </BaseLayout>
    )
}