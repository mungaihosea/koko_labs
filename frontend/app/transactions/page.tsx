import { LuArrowLeft } from "react-icons/lu";
import BaseLayout from "../components/BaseLayout";
import TransactionList from "./TransactionList";
import Paginator from "../components/Paginator";
import TransactionTabs from "./TransactionTabs";



export default function Transactions(){
    return (
        <BaseLayout>
            <div className="text-xl font-bold mb-4 flex items-center gap-3 cursor-pointer">
                <LuArrowLeft /> Transactions
            </div>

            <TransactionTabs />

            <TransactionList />
            <Paginator />
        </BaseLayout>
    )
}