import { LuArrowLeft } from "react-icons/lu";
import BaseLayout from "../components/BaseLayout";
import Charts from "./Charts";


export default function Reports(){
    return (
        <BaseLayout>
            <div className="text-xl font-bold mb-4 flex items-center gap-3 cursor-pointer">
                <LuArrowLeft /> Reports
            </div>

            <Charts />
        </BaseLayout>
    )
}