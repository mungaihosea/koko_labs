import { LuArrowLeft } from "react-icons/lu"
import BaseLayout from "../components/BaseLayout"
import { Button } from 'antd';
import GoalsList from "./GoalsList";
import Paginator from "../components/Paginator";


export default function Goals(){
    return (
        <BaseLayout>
            <div className="mb-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold flex items-center gap-3 cursor-pointer">
                        <LuArrowLeft />
                        <div>
                            Savings Goals
                            <p className="text-xs font-light">Mangage your savings by creating goals.</p>
                        </div>
                    </div>
                    <Button type="primary">Create a goal</Button>
                </div>
            </div>

            <div>
                <GoalsList />
            </div>

            <Paginator />
        </BaseLayout>
    )
}