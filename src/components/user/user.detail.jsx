import { Button, Drawer, notification } from 'antd';
import { useState } from 'react';
import { updateUserAvatarAPI, uploadFileImage } from '../../services/api.service';

const UserDetail = (props) => {
    const { dataUserDetail, setDataUserDetail, setOpenDataUserDetail, isOpenUserDetail, loadUser } = props
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const UploadImage = () => {

    }

    const handleOnchangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }

    const handleSaveImage = async () => {
        //step 1: Upload file
        const resUpload = await uploadFileImage(selectedFile, "avatar")
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded
            console.log(">>>Check resUpload", newAvatar)
            //step 2: Update user
            const updateAvatar = await updateUserAvatarAPI(dataUserDetail._id, dataUserDetail.fullName, dataUserDetail.phone, newAvatar)
            if (updateAvatar.data) {
                setOpenDataUserDetail(false)
                setSelectedFile(null)
                setPreview(null)
                await loadUser()
                notification.success({
                    message: "Update avatar successfully",
                    description: "Update anh thanh cong"
                })
            }
            else {
                notification.error({
                    message: "Error updated image",
                    description: JSON.stringify(resUpload.message)
                })
            }
        } else {
            notification.error({
                message: "Error upload file",
                description: JSON.stringify(resUpload.message)
            })
        }


    }

    return (

        <Drawer
            width={"40vw"}
            title="Detail user"
            onClose={() => {
                setDataUserDetail(null)
                setOpenDataUserDetail(false)
            }}
            open={isOpenUserDetail}>
            {dataUserDetail ? <>
                <p>Id: {dataUserDetail._id}</p>
                <br />
                <p>Full name: {dataUserDetail.fullName}</p>
                <br />
                <p>Email: {dataUserDetail.email}</p>
                <br />
                <p>Phone number: {dataUserDetail.phone}</p>
                <br />
                <p></p>
                <div style={{
                    width: "100px",
                    height: "150px",
                    border: "1px solid #ccc",
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",

                    }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUserDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor='btnUpload'
                        style={{
                            display: "block",
                            width: "fit-content",
                            borderRadius: "10px",
                            cursor: "pointer",
                            marginTop: "10px",
                            marginBottom: "10px",
                            padding: "5px 10px",
                            background: "green"
                        }}
                    >
                        Upload file</label>
                    <input type='file' hidden id='btnUpload'
                        //onChange={handleOnchangeFile} 
                        onChange={(event) => handleOnchangeFile(event)}

                    />
                </div>

                {preview &&
                    <>
                        <div style={{
                            width: "100px",
                            height: "150px",
                            border: "1px solid #ccc",
                            marginBottom: "10px",
                            marginTop: "10px"
                        }}>
                            <img style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",

                            }} src={preview} />
                        </div>
                        <Button type='primary'
                            onClick={() => handleSaveImage()}
                        >Save</Button>
                    </>
                }
            </>
                :
                <>
                    <p>Không có dữ liệu</p>
                </>
            }
        </Drawer>
    )
}

export default UserDetail