import React from 'react'
import { useSelector } from 'react-redux';
import { cx } from '@/utils/hooks/helper';
import Loading from './Loading';
import EmptyData from './EmptyData';

const commonCls = 'mt-8 cardLayout py-6 px-5'
const commonTitleCls = 'text-[22px] font-medium font-secondary'

const CardLayout = ({ children, title, isLoading, isError, isSuccess, isNotInitalized }) => {

    // *global
    const global = useSelector((state) => state.global);

    // *error and loading
    if (isLoading) return <Loading height />
    if (!isLoading && isError) return <EmptyData height='h-[62vh]' errorMsg />

    if (isSuccess && !isLoading && !isError) return (
        <div className={cx(
            global.isDark ? 'bg-lightDark' : 'bg-white',
            commonCls,
        )}>

            <h1 className={cx(
                global.isDark ? 'text-secondary-200' : 'text-gray-600 ',
                commonTitleCls
            )}>
                {title}
            </h1>
            <div className='border-t border-gray-300 mt-2 mb-8'></div>

            {children}
        </div>
    )

    if (isNotInitalized) return <div className={cx(
        global.isDark ? 'bg-lightDark' : 'bg-white',
        commonCls,
    )}>

        {title ? <>
            <h1 className={cx(
                global.isDark ? 'text-secondary-200' : 'text-gray-600 ',
                commonTitleCls
            )}>
                {title}
            </h1>
            <div className='border-t border-gray-300 mt-2 mb-8'></div>
        </> : null}

        {children}
    </div>

    return <></>
}

export default CardLayout