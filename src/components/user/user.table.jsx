import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteColumnOutlined, DeleteFilled, UserDeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.form.jsx'

const UserTable = (props) => {

    const { dataUsers, loadUser } = props
    const [isModalUpdate, setIsModalUpdate] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
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
                    <a onClick={() => {
                        setDataUpdate(record)
                        setIsModalUpdate(true)
                    }}>
                        Edit {record.name}
                    </a>
                    <DeleteFilled style={{ cursor: "pointer", color: "green" }} />
                </div>
            ),
        },

    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdate={isModalUpdate}
                setIsModalUpdate={setIsModalUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser} />
        </>

    )

}

export default UserTable;

