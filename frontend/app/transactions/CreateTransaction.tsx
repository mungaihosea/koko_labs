"use client";
import React from 'react';
import { FloatButton } from 'antd';
import { IoMdAdd } from 'react-icons/io';

export default function CreateTransaction(){
    return (
    <FloatButton type='primary' description={<div style={{fontSize:'10px'}}>New <br></br>Transaction</div>} style={{width: '100px', height: '100px'}} icon={<IoMdAdd className='text-2xl' />} onClick={() => console.log('onClick')} />
    )
}

