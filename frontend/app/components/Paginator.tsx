"use client";
import React from 'react';
import { useState } from 'react';
import { Pagination } from 'antd';


export default function Paginator({activePage, totalPages, totalItems}:any){
    console.log(totalPages)

    const [currentPage, setCurrentPage] = useState(activePage);

    const onPageChange = (page: number) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('page', String(page))
        const url = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`
        window.location.href = url
        setCurrentPage(page)
    };

    return (
        <div className='mt-5'>
            {/* <Pagination  defaultCurrent={2} total={6} /> */}
            <Pagination onChange={onPageChange} defaultCurrent={currentPage} total={totalItems} />
            
        </div>
    )
}