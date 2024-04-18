"use client";
import React from 'react';
import { List } from 'antd';
import { LuArrowUpRight } from 'react-icons/lu';
import { Progress } from 'antd';


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

export default function GoalsList(){
    return (
        <>
            <List
                size="large"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>
                    <div className='flex items-center gap-3 w-full'>
                        <div className='w-full'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <p>KES {item.title}</p>
                                </div>
                                <div>
                                    <p>Target: KES {item.title}</p>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500 mt-1 '>
                                <Progress percent={50} status="active" />
                            </p>

                        </div>
                    </div>
                </List.Item>}
            />
        </>
    );
}
