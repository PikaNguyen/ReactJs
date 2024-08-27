import { Button, Input, notification, Modal } from "antd"
import { useState } from "react"
import { createUserAPI } from "../../services/api.service"

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [isModalUpdate, setIsModalUpdate] = useState(true)

    const handleClickSubmit = async () => {
        const response = await createUserAPI(fullName, email, password, phoneNumber)
        if (response.data) {
            notification.success({
                message: "Edit user",
                description: "Edit user successfully"
            })
            resetAndCloseModel()
            //await loadUser()
        }
        else {
            notification.error({
                message: "Error: Edit user failed",
                description: JSON.stringify(response.message)
            })
        }

        console.log(">>>Check info Name:", { fullName, email, password })
    }

    const resetAndCloseModel = () => {
        setIsModalUpdate(false)
        setFullName("")
        setPassword("")
        setEmail("")
        setPhoneNumber("")
    }

    return (
        <Modal title="Create User"
            open={isModalUpdate}
            onOk={() => handleClickSubmit()}
            onCancel={() => resetAndCloseModel()}
            maskClosable={false}
        >
            <div style={{ display: "flex", gap: "17px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => { setPassword(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => { setPhoneNumber(event.target.value) }}
                    />
                </div>

            </div>
        </Modal>
    )
}

export default UpdateUserModal