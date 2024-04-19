"use client";
import React from 'react';
import { Avatar, List } from 'antd';
import { LuApple, LuArrowDownLeft, LuArrowUpRight, LuTrash2 } from 'react-icons/lu';
import { getDatefromUTCString } from '../utils';
import { formatCurrency } from '../utils';
import { handleDeleteRecurringTransaction } from './actions';





const getTransactionTypeIcon = (transactionType: string) => {
    if (transactionType == 'savings'){
      return(
        <div className='rounded-full bg-green-500 p-2 text-white'>
            <LuApple className='text-xl' />
        </div>
      )
    } else if (transactionType == "expense"){
      return(
        <div className='rounded-full bg-yellow-500 p-2 text-white'>
            <LuArrowUpRight className='text-xl' />
        </div>
      )
    } else if (transactionType == "income"){
      return(
        <div className='rounded-full bg-blue-500 p-2 text-white'>
            <LuArrowDownLeft className='text-xl' />
        </div>
      )
    }
      
}


export default function RecurringTransactionList({transactions}: any){

    

    return (
        <>
            <List
                size="large"
                bordered
                dataSource={transactions.results}
                renderItem={(transaction: any) => <List.Item>
                  <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-3'>
                        {getTransactionTypeIcon(transaction.type)}
                        <div>
                            <div className='flex gap-2 text-xs mt-1'>
                              <p className="font-bold">{formatCurrency(transaction.amount)}</p>
                              <p className='text-gray-500'>{transaction.description}</p>
                            </div>
                            <p className='text-xs text-gray-500 mt-1'>{getDatefromUTCString(transaction.created_at).toLocaleLowerCase()}</p>
                        </div>
                    </div>
                    <div onClick={() => handleDeleteRecurringTransaction(transaction.id)} className='flex items-center gap-2 hover:cursor-pointer text-red-400'><LuTrash2 className='text-lg' /> Delete</div>

                  </div>
                </List.Item>} 
            />
        </>
    );
}
