import CardLayout from '@/components/Layout/Dashboard/CardLayout';
import { statsData } from '@/utils/constant/data';
import { cx } from '@/utils/hooks/helper';
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

    // *global
    const { isDark } = useSelector((state) => state.global);

    return (
        <CardLayout isNotInitalized>
            <div className={cx(
                isDark ? 'bg-livid' : 'bg-stone-50',
                "grid lg:grid-cols-3 shadow w-full rounded-lg  p-4"
            )}>
                {statsData.map((stat, index) => (
                    <div key={index} className=" flex flex-col gap-y-1.5">
                        <p className={cx(
                            isDark ? 'text-white' : 'text-electroMagnetic',
                            " font-medium"
                        )}>{stat.title}</p>

                        <h4 className={cx(
                            isDark ? 'text-blueNight' : 'text-secondary',
                            " "
                        )}>{stat.value}</h4>

                        <small className={cx(
                            isDark ? 'text-white' : 'text-lightDark',
                            " font-medium"
                        )}>{stat.desc}</small>
                    </div>
                ))}
            </div>
        </CardLayout>
    );
};

export default Dashboard;