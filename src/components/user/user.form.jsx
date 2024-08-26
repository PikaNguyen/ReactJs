import { Button, Input, notification, Modal } from "antd"
import { useState } from "react"
import axios from "axios"
import { createUserAPI } from "../../services/api.service"

const UserForm = (props) => {
    const { loadUser } = props
    const [fullName, setFullName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClickSubmit = async () => {
        const response = await createUserAPI(fullName, email, password, phoneNumber)
        if (response.data) {
            notification.success({
                message: "Create user",
                description: "Create user successfully"
            })
            resetAndCloseModel()
            await loadUser()
        }
        else {
            notification.error({
                message: "Error: Create user failed",
                description: JSON.stringify(response.message)
            })
        }

        console.log(">>>Check info Name:", { fullName, email, password })
    }

    const resetAndCloseModel = () => {
        setIsModalOpen(false)
        setFullName("")
        setPassword("")
        setEmail("")
        setPhoneNumber("")
    }

    return (
        <div className="userForm" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Table Users</h3>
                <Button type="primary"
                    onClick={() => setIsModalOpen(true)}
                >CreateUser</Button>
            </div>

            <Modal title="Create User"
                open={isModalOpen}
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
        </div >
    )
}

export default UserForm