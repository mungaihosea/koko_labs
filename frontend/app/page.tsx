import BaseLayout from "./components/BaseLayout";
import { Progress } from 'antd';
import TransactionList from "./transactions/TransactionList";
import { Button } from 'antd';
import { GrTransaction } from "react-icons/gr";
import { getGoals, getTransactions } from "./api";
import { currentUser } from "@clerk/nextjs";
import { LuApple, LuArrowDownLeft, LuArrowUpRight, LuCheck } from "react-icons/lu";
import CreateGoalModal from "./goals/CreateGoalModal";
import { FaMedal } from "react-icons/fa";
import { formatCurrency, getDatefromUTCString } from "./utils";
import ActiveGoalsWidget from "./goals/ActiveGoalWidget";

export default async function Home() {

  const loggedInUser = await currentUser()

  // Transactions data fetching
  const transactions = await getTransactions({user: loggedInUser?.id, page: 1, page_size: 5})
  const expenseTransactions = await getTransactions({user: loggedInUser?.id, type: 'expense', page: 1, page_size: 5})
  const incomeTransactions = await getTransactions({user: loggedInUser?.id, type: 'income', page: 1, page_size: 5})
  const savingsTransactions = await getTransactions({user: loggedInUser?.id, type: 'savings', page: 1, page_size: 5})

  const goals = await getGoals({user: loggedInUser?.id, dismissed: false})
  let activeGoal = null

  if (goals?.results.length > 0){
    activeGoal = goals.results[0]
  } else {
    activeGoal = null
  }

  console.log("Active goal", activeGoal)


  return (
    <BaseLayout>
      <div className="md:border rounded-md">
        {activeGoal ? 
          <ActiveGoalsWidget activeGoal={activeGoal} />
          :
          <div className="rounded-md bg-gray-100 p-8">
            <div className="text-lg font-bold mb-5 flex items-center gap-3"><FaMedal className='text-2xl text-blue-500' /> Plan, Save, Achieve: Establish Your Savings Goal Today</div>
            <div className="flex items-center justify-between">
              <CreateGoalModal />
            </div>
          </div>
        }


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
          <div className="mt-6"><Button href="/transactions" type="primary">View all transactions</Button></div>
        </div>
      </div>
    </BaseLayout>
  );
}
