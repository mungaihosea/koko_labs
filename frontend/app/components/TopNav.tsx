
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { LuMenu } from 'react-icons/lu';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import { capitalizeEachWord } from '../utils';
import DrawerSidenav from './DrawerSideNav';

export default async function TopNav () {

  const loggedInUser = await currentUser() as any

  return (
    <div className='border-b flex gap-4 items-center justify-between px-5 py-3 md:justify-end'>
        {/* <LuMenu className='block md:hidden text-2xl' /> */}
        <DrawerSidenav />
        <div className='flex items-center gap-3'>
          <div className='text-end'>
            {/* <div className='text-md font-bold'>{capitalizeEachWord(`${loggedInUser.firstName} ${loggedInUser.lastName}`)}</div> */}
            <div className='text-xs font-bold'>{`${loggedInUser.firstName} ${loggedInUser.lastName}`.toUpperCase()}</div>
            <div className='text-xs'>mungaihosea@gmail.com</div>
          </div>
          <UserButton />
        </div>
    </div>
  );
}
