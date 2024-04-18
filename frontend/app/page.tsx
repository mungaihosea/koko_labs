import BaseLayout from "./components/BaseLayout";
import { Progress } from 'antd';
import TransactionList from "./transactions/TransactionList";
import { Button } from 'antd';
import { GrTransaction } from "react-icons/gr";
import { getTransactions } from "./api";
import { currentUser } from "@clerk/nextjs";
import { LuApple, LuArrowDownLeft, LuArrowUpRight } from "react-icons/lu";

export default async function Home() {

  const loggedInUser = await currentUser()

  // Transactions data fetching
  const transactions = await getTransactions({user: loggedInUser?.id, page: 1, page_size: 5})
  const expenseTransactions = await getTransactions({user: loggedInUser?.id, type: 'expense', page: 1, page_size: 5})
  const incomeTransactions = await getTransactions({user: loggedInUser?.id, type: 'income', page: 1, page_size: 5})
  const savingsTransactions = await getTransactions({user: loggedInUser?.id, type: 'savings', page: 1, page_size: 5})



  return (
    <BaseLayout>
      <div className="md:border rounded-md">
        <div className="rounded-md bg-gray-100 p-8">
          <div className="text-lg font-bold mb-5">Savings Goal</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-light text-gray-500">Currently saved</div>
              <div className="font-extrabold text-xl">KES 54,000</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-light text-gray-500">Target amount</div>
              <div className="font-extrabold text-xl">KES 100,000</div>
            </div>
          </div>
          
          <Progress percent={50} status="active" />
          <div className="mt-5">
            <div className="text-xs font-light text-gray-500">Goal created on</div>
            <div className="text-xs font-bold">10 Jan 2024</div>
          </div>
        </div>

        <div className="mt-4 md:px-8 py-4 flex flex-col gap-4 md:flex-row">
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">All Transactions</div>
              <div className="text-xl font-light">{transactions.count}</div>
            </div>
            <div className="border rounded-full p-2 border-blue-500 text-blue-500">
              <GrTransaction className="text-xl" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">Expense transactions</div>
              <div className="text-xl font-light">{expenseTransactions.count}</div>
            </div>
            <div className='rounded-full bg-yellow-500 p-2 text-white'>
              <LuArrowUpRight className='text-xl' />
          </div>
          </div>
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">Income transactions</div>
              <div className="text-xl font-light">{incomeTransactions.count}</div>
            </div>
            <div className='rounded-full bg-blue-500 p-2 text-white'>
                <LuArrowDownLeft className='text-xl' />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">Savings transactions</div>
              <div className="text-xl font-light">{savingsTransactions.count}</div>
            </div>
            <div className='rounded-full bg-green-500 p-2 text-white'>
                <LuApple className='text-xl' />
            </div>
          </div>
          
        </div>

        <div className="md:px-8 pb-8 mt-4">
          <div className="mb-4 font-bold">Latest Transactions</div>
          <TransactionList transactions={transactions} />
          <div className="mt-6"><Button type="primary">View all transactions</Button></div>
        </div>
      </div>
    </BaseLayout>
  );
}
