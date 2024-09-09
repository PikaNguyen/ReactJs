import { useState } from 'react';
import { Table, } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import UpdateUserModal from './update.user.form.jsx'
import UserDetail from './user.detail.jsx';

const UserTable = (props) => {

    const { dataUsers, loadUser
        , current, pageSize, total,
        setCurrent, setPageSize
    } = props
    const [isModalUpdate, setIsModalUpdate] = useState(false)
    const [dataUpdate, setDataUpdate] = useState(null)
    const [isOpenUserDetail, setOpenDataUserDetail] = useState(false)
    const [dataUserDetail, setDataUserDetail] = useState(null)
    const columns = [
        {
            title: "No.",
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        onClick={() => {
                            setDataUserDetail(record)
                            setOpenDataUserDetail(true)
                        }}
                    >{record._id}</a>
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
    const onChange = (pagination, filters, sorter, extra) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current)
            }
        }

        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize)
            }
        }

        console.log("<<>>>>> Check ", pagination, filters, sorter, extra)
    };

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}

            />
            <UpdateUserModal
                isModalUpdate={isModalUpdate}
                setIsModalUpdate={setIsModalUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser} />
            <UserDetail
                dataUserDetail={dataUserDetail}
                setDataUserDetail={setDataUserDetail}
                isOpenUserDetail={isOpenUserDetail}
                setOpenDataUserDetail={setOpenDataUserDetail}
                loadUser={loadUser}
            />
        </>

    )

}

export default UserTable;

