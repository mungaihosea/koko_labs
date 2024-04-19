import { LuArrowLeft } from "react-icons/lu";
import BaseLayout from "../components/BaseLayout";
import RecurringTransactionList from "./RecurringTransactionList";
import Paginator from "../components/Paginator";
// import TransactionTabs from "./TransactionTabs";
import { getTransactions, getRecurringTransactions } from "../api";
import { currentUser } from "@clerk/nextjs";
import { Badge } from 'antd';
import CreateRecurringTransactionModal from "./CreateRecurringTransactionModal";


export default async function Transactions({searchParams}:any){

    const loggedInUser = await currentUser()
    const transactions = await getRecurringTransactions({user: loggedInUser?.id, ...searchParams})


    return (
        <BaseLayout>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <a href="/" className="text-xl font-bold flex items-center gap-3 cursor-pointer">
                        <LuArrowLeft />
                        <div>
                            Recurring Transactions
                            <p className="text-xs font-light">These are transactions that will automatically re-occur after the selected period</p>
                        </div>
                    </a>
                    <CreateRecurringTransactionModal/>
                </div>
            </div>

            {/* <TransactionTabs /> */}
            <RecurringTransactionList transactions={transactions} />

            <Paginator activePage={transactions.current_page} totalPages={transactions.num_pages} totalItems={transactions.count}/>

        </BaseLayout>
    )
}