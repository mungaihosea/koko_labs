import BaseLayout from "./components/BaseLayout";
import { Progress } from 'antd';
import TransactionList from "./transactions/TransactionList";
import { Button } from 'antd';
import { GrTransaction } from "react-icons/gr";

export default function Home() {
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
              <div className="text-xl font-light">120</div>
            </div>
            <div className="border rounded-full p-2 border-blue-500 text-blue-500">
              <GrTransaction className="text-xl" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">Total Expenditure</div>
              <div className="text-xl font-light">120</div>
            </div>
            <div className="border rounded-full p-2 border-blue-500 text-blue-500">
              <GrTransaction className="text-xl" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">Total Earnings</div>
              <div className="text-xl font-light">120</div>
            </div>
            <div className="border rounded-full p-2 border-blue-500 text-blue-500">
              <GrTransaction className="text-xl" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-between space-y-1 rounded-xl bg-gray-100 p-8">
            <div>
              <div className="font-bold text-sm">Total Savings</div>
              <div className="text-xl font-light">120</div>
            </div>
            <div className="border rounded-full p-2 border-blue-500 text-blue-500">
              <GrTransaction className="text-xl" />
            </div>
          </div>
          
        </div>

        <div className="md:px-8 pb-8 mt-4">
          <div className="mb-4 font-bold">Latest Transactions</div>
          <TransactionList />
          <div className="mt-6"><Button type="primary">View all transactions</Button></div>
        </div>
      </div>
    </BaseLayout>
  );
}
