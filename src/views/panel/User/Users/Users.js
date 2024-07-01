import DataTableWrapper from '@/components/Layout/DataTableWrapper/DataTableWrapper';
import React, { useRef } from 'react';
import UsersTable from './UsersTable';
import { usersData } from '@/utils/constant/data';
import CardLayout from '@/components/Layout/Dashboard/CardLayout';

const Users = () => {

    // *ref variables
    const componentRef = useRef(null);

    return (
        <CardLayout isNotInitalized>
            <DataTableWrapper componentRef={componentRef}>
                <UsersTable
                    data={usersData}
                />
            </DataTableWrapper>
        </CardLayout>
    );
};

export default Users;