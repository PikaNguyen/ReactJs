import { Drawer } from 'antd';

const UserDetail = (props) => {
    const { dataUserDetail, setDataUserDetail, setOpenDataUserDetail, isOpenUserDetail } = props
    return (

        <Drawer title="Detail user"
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