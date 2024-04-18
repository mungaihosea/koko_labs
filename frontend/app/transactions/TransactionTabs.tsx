"use client";
import { Radio, Tabs } from 'antd';

export default function TransactionTabs() {
    return (
        <div>
            {/* onChange={(value) => (console.log(value))} */}
                <Radio.Group value={'small'}  style={{ marginBottom: 16 }}>
                    <Radio.Button value="small">All transactions</Radio.Button>
                    <Radio.Button value="middle">Earnings</Radio.Button>
                    <Radio.Button value="middle">Expenses</Radio.Button>
                    <Radio.Button value="large">Savings</Radio.Button>
                </Radio.Group>
            </div>
    )
}