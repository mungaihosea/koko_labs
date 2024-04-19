"use client";
import { Button, Progress } from 'antd';
import { FaMedal } from "react-icons/fa";
import { formatCurrency, getDatefromUTCString } from "../utils";
import { dismissGoal } from './actions';


export default function ActiveGoalsWidget({activeGoal}: any){
    return (
        <div className="rounded-md border-b border-gray-100 bg-gray-100 p-8" style={{backgroundImage: activeGoal.achieved ? `url(celebration.gif)` : 'none'}}>
            <div className="text-lg font-bold mb-5 flex items-center gap-3"><FaMedal className='text-2xl text-blue-500' /> Savings Goal</div>
            <div className="flex items-center justify-between">
                <div>
                <div className="text-xs font-light text-gray-500">Currently saved</div>
                <div className="font-extrabold text-xl">{formatCurrency(activeGoal.current_amount)}</div>
                </div>
                <div className="text-right">
                <div className="text-xs font-light text-gray-500">Target amount</div>
                <div className="font-extrabold text-xl">{formatCurrency(activeGoal.target_amount)}</div>
                </div>
            </div>
            
            <Progress percent={Math.round((activeGoal.current_amount/activeGoal.target_amount)* 100)} />
            
            <div className="mt-5 flex gap-4">
                {activeGoal.achieved ? 
                <div>
                    <div className="text-xs font-light text-gray-500">Goal achieved</div>
                    <Button color="success" onClick={() => {dismissGoal(activeGoal.id)}}>Dismiss</Button>
                </div>
                :
                <div>
                    <div className="text-xs font-light text-gray-500">Goal created on</div>
                    <div className="text-xs font-bold">{getDatefromUTCString(activeGoal.created_at)}</div>
                </div>
                }
            </div>
        </div>
    )
}