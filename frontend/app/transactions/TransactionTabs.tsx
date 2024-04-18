"use client";
import { Radio, Tabs } from 'antd';
import { useState } from 'react';

export default function TransactionTabs() {
    const searchParams = new URLSearchParams(window.location.search) as any;

    console.log(searchParams.get('type'))
    const [activeTab, setActiveTab] = useState(searchParams.get('type') ? searchParams.get('type') : '')

    const handleChangeTab = (e: any) => {
        const transactionType = e.target.value
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('type', String(transactionType))
        const url = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`
        window.location.href = url
        setActiveTab(transactionType)
        
    }
    return (
        <div>
            <Radio.Group value={activeTab} onChange={handleChangeTab}  style={{ marginBottom: 16 }}>
                <Radio.Button value="">All</Radio.Button>
                <Radio.Button value="income">Income</Radio.Button>
                <Radio.Button value="expense">Expenses</Radio.Button>
                <Radio.Button value="savings">Savings</Radio.Button>
            </Radio.Group>
        </div>
    )
}