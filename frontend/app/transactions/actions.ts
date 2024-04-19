"use server";
import { currentUser } from "@clerk/nextjs";
import { createTransaction } from "../api";
import { revalidatePath } from "next/cache";

export const handleCreateTransaction = async (values: any) => {
    const loggedInUser = await currentUser()
    const payload = {...values, user: loggedInUser?.id}

    const createdTransaction = await createTransaction(payload)

    revalidatePath('/')
    revalidatePath('/transactions')
    revalidatePath('/goals')
    return createdTransaction
}