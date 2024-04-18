"use server";
import { currentUser } from "@clerk/nextjs";
import { createTransaction } from "../api";

export const handleCreateTransaction = async (values: any) => {
    const loggedInUser = await currentUser()
    const payload = {...values, user: loggedInUser?.id}
    console.log(payload)
    const createdTransaction = await createTransaction(payload)
    console.log(createdTransaction)
    return createdTransaction
}