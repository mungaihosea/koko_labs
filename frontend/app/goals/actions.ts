"use server";
import { revalidatePath } from "next/cache";
import { createGoal, updateGoal } from "../api"
import { currentUser } from "@clerk/nextjs";


export const handleCreateGoal = async (data: any) => {
    const loggedInUser = await currentUser()
    const payload = {...data, user: loggedInUser?.id}
    console.log(payload)

    const createdGoal = await createGoal(payload)
    revalidatePath('/')
    revalidatePath('/goals')
    return createdGoal
}



export const dismissGoal = async (goalId: any) => {
    console.log('clicked')
    const payload = {dismissed: true}
    await updateGoal(goalId, payload)
    revalidatePath('/')
    revalidatePath('/goals')
    revalidatePath('/transactions')
}