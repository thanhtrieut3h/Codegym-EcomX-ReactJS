import { Form, Input, Button, Card, Typography, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LoginPage = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Card className="w-full max-w-md">
                    <div className="text-center mb-6">
                        <Title level={2}>Login</Title>
                        <p className="text-gray-500">sign in to your account</p>
                    </div>
                    <Form
                    name="login"
                    layout="vertical"
                    size="large"
                    >
                        <Form.Item
                        name="username"
                        rules={[
                            {required: true, message: "Username is required"}
                        ]}
                        >
                            <Input
                            prefix={<UserOutlined/>}
                            placeholder="Enter username"
                            />
                        </Form.Item>
                        <Form.Item
                        name="password"
                        rules={[
                            {required: true, message: "Password is required"}
                        ]}
                        >
                            <Input.Password
                            prefix={<LockOutlined/>}
                            placeholder="Enter password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block> Sign In</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}
export default LoginPage;