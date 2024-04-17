"use client";
import React from 'react';
import { Avatar, List } from 'antd';
import { LuArrowUpRight } from 'react-icons/lu';

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
    title: 'Ant Design Title 4',
  },
];

export default function TransactionList(){
    return (
        <>
            <List
                size="large"
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full bg-blue-500 p-2 text-white'>
                            <LuArrowUpRight className='text-xl' />
                        </div>
                        <div>
                            <p>{item.title}</p>
                            <p className='text-xs text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            {/* <p className='text-xs text-gray-500 mt-1'>Jan 12 2024</p> */}
                        </div>
                    </div>
                </List.Item>}
            />
        </>
    );
}
