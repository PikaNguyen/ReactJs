import { Button, Drawer } from 'antd';

const UserDetail = (props) => {
    const { dataUserDetail, setDataUserDetail, setOpenDataUserDetail, isOpenUserDetail } = props
    const UploadImage = () => {

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
                <div>
                    <img style={{
                        width: "100px",
                        height: "auto"
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
                    <input type='file' hidden id='btnUpload' />
                </div>



                <Button type='primary'>Upload/Update image</Button>
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