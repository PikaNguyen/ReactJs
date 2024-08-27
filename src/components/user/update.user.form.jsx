import { Button, Input, notification, Modal } from "antd"
import { useEffect, useState } from "react"
import { createUserAPI, updateUserAPI } from "../../services/api.service"

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState()
    const [id, setId] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    const { isModalUpdate, setIsModalUpdate, dataUpdate, setDataUpdate, loadUser } = props

    //Giá trị trước khác giá trị sau thì sẽ useEffect
    useEffect(() => {
        console.log(">>>Check record UseEffect", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhoneNumber(dataUpdate.phone)
        }
    }, [dataUpdate])

    const handleClickSubmit = async () => {
        const response = await updateUserAPI(id, fullName, phoneNumber)
        if (response.data) {
            notification.success({
                message: "Edit user",
                description: "Edit user successfully"
            })
            resetAndCloseModel()
            await loadUser()
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
        setId("")
        setPhoneNumber("")
        setDataUpdate(null)
    }

    return (
        <Modal title="Edit User"
            open={isModalUpdate}
            onOk={() => handleClickSubmit()}
            onCancel={() => resetAndCloseModel()}
            maskClosable={false}
        >
            <div style={{ display: "flex", gap: "17px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
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