import { LuArrowLeft } from "react-icons/lu";
import BaseLayout from "../components/BaseLayout";
import { Button, Flex } from 'antd';
import TransactionList from "../transactions/TransactionList";
import Paginator from "../components/Paginator";

export default function Expenses(){
    return (
        <BaseLayout>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold flex items-center gap-3 cursor-pointer">
                        <LuArrowLeft />
                        <div>
                            Expense Categories
                            <p className="text-xs font-light">This section allows you to categorize your expenses</p>
                        </div>
                    </div>
                    <Button type="primary">Create expense</Button>
                </div>
            </div>

            <div>
                <TransactionList />
            </div>

            <Paginator />
        </BaseLayout>
    )
}