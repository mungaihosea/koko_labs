"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function SideNavItem({ title, icon, path}: any){

    const pathName = usePathname()
    const active = pathName == path

    return (
        <a href={path}>
            <div className={`${active ? 'bg-white text-blue-600 font-extrabold': 'text-gray-700'} my-1 flex gap-4 items-center rounded-lg px-3 py-3 mx-4 cursor-pointer ${!active && 'hover:text-black hover:bg-gray-100 hover:shadow-md'}`}>
                {React.cloneElement(icon, {className: 'text-lg'})} <div className="text-sm">{title}</div>
            </div>
        </a>
    )
}