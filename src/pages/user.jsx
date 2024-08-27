import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { fetchAllUsersApi } from '../services/api.service';
import React, { useEffect, useState } from 'react';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchAllUsersApi()
        console.log(res.data)
        setDataUsers(res.data)
    }

    return (
        <div>
            <div style={{ padding: "20px" }}>
                <UserForm loadUser={loadUser} />
                <UserTable dataUsers={dataUsers}
                    loadUser={loadUser}
                />
            </div>
        </div>
    )
}

export default UserPage