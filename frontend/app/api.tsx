"use server";
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create a reusable instance of Axios
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.MAIN_API_URL, // replace with your API base URL
  timeout: 5000, // adjust timeout as needed
});



// Transactions
export async function createTransaction(transactionData: any): Promise<any> {
  const response = await axiosInstance.post('/transactions', transactionData);
  return await response.data
}


export async function getTransactions(filters={}): Promise<any> {
    const response = await axiosInstance.get('/transactions', {params: filters});
    return await response.data
}

export async function getTransactionById(transactionId: any): Promise<any> {
    const response = await axiosInstance.get(`/transactions/${transactionId}`);
    return await response.data
}



// Recurring Transactions
export async function createRecurringTransaction(transactionData: any): Promise<any> {
  const response = await axiosInstance.post('/recurring_transactions', transactionData);
  return await response.data
}


export async function getRecurringTransactions(filters={}): Promise<any> {
    const response = await axiosInstance.get('/recurring_transactions', {params: filters});
    return await response.data
}

export async function getRecurringTransactionById(transactionId: any): Promise<any> {
    const response = await axiosInstance.get(`/recurring_transactions/${transactionId}`);
    return await response.data
}

export async function deleteRecurringTransactionById(transactionId: any): Promise<any> {
    const response = await axiosInstance.delete(`/recurring_transactions/${transactionId}`);
    return await response.data
}



// Goals
export async function createGoal(goalData: any): Promise<any> {
  const response = await axiosInstance.post('/goals', goalData);
  return await response.data
}


export async function getGoals(filters={}): Promise<any> {
    const response = await axiosInstance.get('/goals', {params: filters});
    return await response.data
}


export async function getGoalById(goalId: any): Promise<any> {
    const response = await axiosInstance.get(`/goals/${goalId}`);
    return await response.data
}


export async function updateGoal(goalId: any, data: any): Promise<any> {
    const response = await axiosInstance.patch(`/goals/${goalId}`, data);
    return await response.data
}


  