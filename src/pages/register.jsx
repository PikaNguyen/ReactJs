import { Button, Input, Form, notification, Row, Col } from "antd"
import { registerUserAPI } from "../services/api.service"
import { useNavigate } from "react-router-dom"


const RegisterPage = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const onFinish = async (values) => {

        //call api
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        )
        console.log("check response", res.data)
        if (res.data) {
            notification.success({
                message: "Register user",
                description: "Register successfully!"
            })

            navigate("/login")
        }

        else {
            notification.error({
                message: "Error Register user",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{
                margin: "10px"
            }}
        //onFinishFailed={onFinishFailed}
        >
            <Row justify={"center"}>
                <Col xs={24} md={6} >
                    <Form.Item
                        label="Full name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your full name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col></Row>
            <Row justify={"center"}>
                <Col xs={24} md={6} >
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',

                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={6}>
                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                            {
                                pattern: new RegExp(/\d+/g),
                                message: 'Please input your phone number!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col>
                    <div>
                        <Button
                            onClick={() => form.submit()}
                            type="primary">Register</Button>


                        <Button onClick={() => {
                            form.setFieldsValue({
                                email: "DanChoi@gmail.com",
                                fullName: "Asd"
                            })
                            console.log("Check form: ", form.getFieldsValue())
                        }} >Test</Button>
                    </div>
                </Col>
            </Row>



        </Form>
    )
}

export default RegisterPage