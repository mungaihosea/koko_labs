
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { LuMenu } from 'react-icons/lu';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import { capitalizeEachWord } from '../utils';


export default async function TopNav () {

  const loggedInUser = await currentUser() as any


  return (
    <div className='border-b flex gap-4 items-center justify-between px-5 py-3 md:justify-end'>
        <LuMenu className='block md:hidden text-2xl' />
        <div className='flex items-center gap-3'>
          <div className='text-end'>
            <div className='text-xs'>{capitalizeEachWord(`${loggedInUser.firstName} ${loggedInUser.lastName}`)}</div>
          </div>
          <UserButton />
        </div>
    </div>
  );
}
