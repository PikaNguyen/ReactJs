import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteColumnOutlined, DeleteFilled, UserDeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.form.jsx'

const UserTable = (props) => {

    const { dataUsers } = props
    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a>{record._id}</a>
                )
            }
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <a>Edit {record.name}</a>
                    <DeleteFilled style={{ cursor: "pointer", color: "green" }} />
                </div>
            ),
        },

    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];



    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"} />
            <UpdateUserModal />
        </>

    )

}

export default UserTable;

