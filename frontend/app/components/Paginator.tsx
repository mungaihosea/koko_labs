"use client";
import React from 'react';
import { Pagination } from 'antd';


export default function Paginator(){
    return (
        <div className='mt-5'>
            <Pagination defaultCurrent={1} total={50} />
        </div>
    )
}