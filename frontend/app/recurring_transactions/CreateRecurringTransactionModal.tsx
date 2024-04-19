"use client";
import React from 'react';
import { Button, Modal,Form, Input, Select, Space  } from 'antd';
import { useState } from 'react';
import { handleCreateRecurringTransaction } from './actions';
// import { createTransaction } from '../api';
// import { handleCreateTransaction } from './actions';


export default function CreateRecurringTransactionModal(){    
    const { Option } = Select;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values: any) => {
        setLoading(true)
        // await handleCreateTransaction(values)
        await handleCreateRecurringTransaction(values)
        setLoading(false)
        handleCancel()

        console.log(values);
    };


    return (
        <div>
            <Button type='primary' onClick={showModal}>Create recurring transaction</Button>
            <Modal title={<div className='font-bold'>Create Recurring Transaction</div>} footer={null} open={isModalOpen} onCancel={handleCancel} >
                <div className='mt-7 w-full'>
                    <Form
                        layout='vertical'
                        form={form}
                        name="control-hooks"
                        onFinish={onFinish}
                        className='w-full'
                        >
                        <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                            <Input className='border border-green-500 w-full'/>
                        </Form.Item>
                        <Form.Item name="type" label="Transaction type" rules={[{ required: true }]} className='text-start w-full'>
                            <Select
                                placeholder="Select the transaction type"
                                allowClear
                            >
                                <Option value="income">Income</Option>
                                <Option value="expense">Expense</Option>
                                <Option value="savings">Savings</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="frequency" label="Frequency" rules={[{ required: true }]} className='text-start w-full'>
                            <Select
                                placeholder="Select the frequncy"
                                allowClear
                            >
                                <Option value="Minute">Every minute</Option>
                                <Option value="Day">Every day</Option>
                                <Option value="Week">Every week</Option>
                                <Option value="Month">Every month</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: false, message: 'Please input!' }]}
                            >
                            <Input.TextArea />
                        </Form.Item>
                        
                        <Form.Item >
                            <Space>
                            <Button loading={loading} type="primary" htmlType="submit">
                                Create
                            </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

