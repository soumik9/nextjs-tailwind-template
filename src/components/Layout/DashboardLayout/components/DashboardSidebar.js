import React from 'react'
import MenuItem from '../partials/MenuItem';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { cx } from '@/utils/hooks/helper';
import { dashboardMenuItems } from '@/utils/constant/constant';
import { useSelector } from 'react-redux';

const DashboardSidebar = ({ open, setOpen }) => {

    // *global
    const router = useRouter();
    const global = useSelector((state) => state.global);

    return (
        <div className={cx(
            open ? 'w-72' : 'w-20',
            global.isDark ? 'bg-lightDark' : 'bg-primary',
            'h-screen relative duration-300 pb-5'
        )}>

            <div className={cx('py-[0.98rem] flex gap-x-4 items-center border-b px-5')}>
                <Image width={40} height={40} src="/logo.png" alt="dashboard logo" className={cx(
                    'cursor-pointer duration-500',
                    open && 'rotate-[360deg]'
                )} />
                <h1 className={cx(
                    global.isDark ? 'text-gray-300' : 'text-white',
                    'origin-left font-medium text-xl duration-300 cursor-default',
                    !open && 'scale-0'
                )}>Basic</h1>
            </div>

            <ul className='pt-6 flex flex-col gap-y-2 px-5'>
                {dashboardMenuItems.map((menu, index) => (
                    <MenuItem
                        key={menu.to}
                        index={index}
                        menu={menu}
                        open={open}
                        isActive={
                            menu.activeLinks.includes(router.pathname)
                        }
                    />
                ))}
            </ul>
        </div>
    )
}

export default DashboardSidebar