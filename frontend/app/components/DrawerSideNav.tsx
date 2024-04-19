"use client";
import React, { useState } from 'react';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import { Button, Drawer, Radio, Space } from 'antd';
import { LuMenu } from 'react-icons/lu';
import SideNav from './SideNav';

export default function DrawerSidenav() {
    const [open, setOpen] = useState(false);

    const closeDrawer = () => {
        setOpen(!open)
    }

    return (
        <>
            <LuMenu className='block md:hidden text-2xl cursor-pointer' onClick={closeDrawer} />
            <Drawer
                // title="Basic Drawer"
                placement={'left'}
                closable={true}
                onClose={closeDrawer}
                open={open}
            >
                <SideNav />
        </Drawer>
        </>
    )
}