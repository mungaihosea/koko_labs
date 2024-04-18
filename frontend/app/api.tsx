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
  
  