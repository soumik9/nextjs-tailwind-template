import React from 'react';
import DataTable from 'react-data-table-component';
import UActionBtn from './UActionBtn';

const UsersTable = ({ data }) => {

    // *users data column
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name,
            filterable: true,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            filterable: true,
        },
        {
            name: 'Action',
            cell: (row) => <UActionBtn _id={row.id} email={row.email} />,
            width: '175px'
        },
    ];


    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                highlightOnHover
                pagination={data?.length > 10}
                persistTableHead={true}
                paginationPerPage={10}
            />
        </div>
    );
};

export default UsersTable;