"use server";
import { currentUser } from "@clerk/nextjs";
import { createRecurringTransaction, deleteRecurringTransactionById } from "../api";
import { revalidatePath } from "next/cache";


export const handleCreateRecurringTransaction = async (values: any) => {
    const loggedInUser = await currentUser()
    const payload = {...values, user: loggedInUser?.id}
    console.log(payload)
    const createdTransaction = await createRecurringTransaction(payload)
    console.log(createdTransaction)
    revalidatePath('/')
    revalidatePath('/transactions')
    revalidatePath('/goals')
    revalidatePath('/recurring_transactions')
    return createdTransaction
}



export const handleDeleteRecurringTransaction = async (transactionId: any) => {
    await deleteRecurringTransactionById(transactionId)
    revalidatePath('/recurring_transactions')
}