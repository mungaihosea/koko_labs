import { LuArrowLeft } from "react-icons/lu"
import BaseLayout from "../components/BaseLayout"
import { Button } from 'antd';
import GoalsList from "./GoalsList";
import Paginator from "../components/Paginator";
import CreateGoalModal from "./CreateGoalModal";
import { getGoals } from "../api";
import { currentUser } from "@clerk/nextjs";


export default async function Goals(){
    const loggedInUser = await currentUser()
    const goals = await getGoals({user: loggedInUser?.id})


    const pendingGoals = await getGoals({user: loggedInUser?.id, dismissed: false})
    let activeGoal = null

    if (pendingGoals?.results.length > 0){
        activeGoal = pendingGoals.results[0]
    } else {
        activeGoal = null
    }

    return (
        <BaseLayout>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <a href="/" className="text-xl font-bold flex items-center gap-3 cursor-pointer">
                        <LuArrowLeft />
                        <div>
                            Savings Goals
                            <p className="text-xs font-light">Manage your savings by creating goals.</p>
                        </div>
                    </a>
                    {!activeGoal && <CreateGoalModal/>}
                </div>
            </div>

            <div>
                <GoalsList goals = {goals} />
            </div>

            <Paginator />

        </BaseLayout>
    )
}