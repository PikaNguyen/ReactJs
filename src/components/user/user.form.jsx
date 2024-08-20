import { Button, Input, notification } from "antd"
import { useState } from "react"
import axios from "axios"
import { createUserAPI } from "../../services/api.service"

const UserForm = () => {

    const [fullName, setFullName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()


    const handleClickButton = async () => {
        const response = await createUserAPI(fullName, email, password, phoneNumber)
        if (response.data && response.data.data) {
            notification.success({
                message: "Create user",
                description: "Create user successfully"
            })
        }
        else {
            notification.error({
                message: "Error: Create user failed",
                description: JSON.stringify(response.message)
            })
        }

        console.log(">>>Check info Name:", { fullName, email, password })
    }

    return (
        <div className="userForm" style={{ margin: "20px 0" }}>
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
                <div>
                    <Button type="primary"
                        onClick={handleClickButton}
                    //onClick={() => { handleClickButton }}

                    >Submit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm