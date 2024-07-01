import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { DASHBOARD_LINKS, USER_LINKS } from '@/utils/enum/link';
import Users from '@/views/panel/User/Users/Users';
import React from 'react';

const UserPage = () => {
    return (
        <>
            <Breadcrumb
                title='Users'
                getLinks={[
                    { url: USER_LINKS.USER, text: 'Users', isActive: true }
                ]}
                nextPageText='Dashboard'
                nextPageLink={DASHBOARD_LINKS.DASHBOARD}
            />

            <Users />
        </>
    );
};

export default UserPage;