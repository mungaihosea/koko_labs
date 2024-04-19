"use client";
import React from 'react';
import { Button, message, Modal,Form, Input, Select, Space  } from 'antd';
import { useState } from 'react';
import { FaMedal } from 'react-icons/fa';
import { handleCreateGoal } from './actions';


export default function CreateGoalModal(){    
    const { Option } = Select;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm();
    const [messageApi, contextHolder] = message.useMessage();
    

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values: any) => {
        setLoading(true)
        await handleCreateGoal(values)
        setLoading(false)
        handleCancel()
        messageApi.info('Savings goal created successfully');
        form.resetFields()
    };

    return (
        <div>
            {contextHolder}
            <Button type="primary" onClick={showModal}>Create a goal</Button>
            <Modal title={<div className='font-bold flex items-center gap-3'><FaMedal className='text-2xl text-blue-500' /> Create a savings goal</div>} footer={null} open={isModalOpen} onCancel={handleCancel} >
                <div className='mt-7 w-full'>
                    <Form
                        layout='vertical'
                        form={form}
                        name="control-hooks"
                        onFinish={onFinish}
                        className='w-full'
                        >
                        <Form.Item name="target_amount" label="Target amount" rules={[{ required: true }]}>
                            <Input className='border border-green-500 w-full'/>
                        </Form.Item>
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[{ required: false, message: 'Please input!' }]}
                            >
                            <Input.TextArea placeholder='Briefly describe what you are saving for'/>
                        </Form.Item>
                        
                        <Form.Item >
                            <Space>
                            <Button loading={loading} type="primary" htmlType="submit">
                                Create
                            </Button>
                            
                            {/* <Button type="link" htmlType="button" onClick={onFill}>
                                Fill form
                            </Button> */}
                            </Space>
                        </Form.Item>
                    </Form>
                </div>

            </Modal>
        </div>
    )
}

