import { LuArrowLeft } from "react-icons/lu";
import BaseLayout from "../components/BaseLayout";
import Charts from "./Charts";


export default function Reports(){
    return (
        <BaseLayout>
            <a href="/" className="text-xl font-bold mb-4 flex items-center gap-3 cursor-pointer">
                <LuArrowLeft /> Transaction Reports
            </a>

            <Charts />
        </BaseLayout>
    )
}