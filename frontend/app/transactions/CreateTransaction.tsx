"use client";
import React from 'react';
import { FloatButton } from 'antd';
import { IoMdAdd } from 'react-icons/io';
import { Button, Modal,Form, Input, Select, Space  } from 'antd';
import { useState } from 'react';
// import { createTransaction } from '../api';
import { handleCreateTransaction } from './actions';


export default function CreateTransaction(){    
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
        await handleCreateTransaction(values)
        setLoading(false)
        handleCancel()

        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <FloatButton type='primary' description={
                    <div style={{fontSize:'10px', fontWeight:'bold'}}>
                        New <br/>
                        Transaction
                    </div>
                }
                style={{width: '100px', height: '100px'}}
                icon={<IoMdAdd className='text-2xl font-extrabold' />}
                onClick={showModal} 
            />
            <Modal title={<div className='font-bold'>Create Transaction</div>} footer={null} open={isModalOpen} onCancel={handleCancel} >
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
                                Submit
                            </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

