"use client";
import React from 'react';
import { List } from 'antd';
import { Progress } from 'antd';
import { formatCurrency } from '../utils';
import { getDatefromUTCString } from '../utils';


const data = [
  {
    title: '100',
  },
  {
    title: '2,500',
  },
  {
    title: '3,000',
  },
  {
    title: '400',
  },
];

export default function GoalsList({goals}: any){
    return (
        <>
            <List
                size="large"
                bordered
                dataSource={goals.results}
                renderItem={(goal: any) => <List.Item>
                    <div className='flex items-center gap-3 w-full'>
                        <div className='w-full'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p>Current: {formatCurrency(goal.current_amount)}</p>
                                </div>
                                <div>
                                    <p>Target: {formatCurrency(goal.target_amount)}</p>
                                </div>
                            </div>
                            <p suppressHydrationWarning className='text-xs text-gray-500 mt-1 '>
                                <Progress showInfo={false} percent={(goal.current_amount/goal.target_amount)* 100}  />
                            </p>
                            <p className='text-xs text-gray-500'>{getDatefromUTCString(goal.created_at).toLocaleLowerCase()}</p>

                        </div>
                    </div>
                </List.Item>}
            />
        </>
    );
}
