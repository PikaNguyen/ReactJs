import { Button, Drawer } from 'antd';
import { useState } from 'react';

const UserDetail = (props) => {
    const { dataUserDetail, setDataUserDetail, setOpenDataUserDetail, isOpenUserDetail } = props
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
    console.log(">>> Check file", preview)
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
                    <div style={{
                        width: "100px",
                        height: "150px",
                        border: "1px solid #ccc",
                    }}>
                        <img style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",

                        }} src={preview} />
                    </div>

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