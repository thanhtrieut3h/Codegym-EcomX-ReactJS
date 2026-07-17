import { Form, Input, Button, Card, Typography, Row, Col, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest, clearError } from '../redux/slices/authSlice';
import { useEffect } from "react";

const { Title } = Typography;

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, loading, error } = useSelector(state => state.auth);
    const [form] = Form.useForm();

    useEffect(() => {
        if(isAuthenticated){
            navigate("/");
        }
        return () => {
            dispatch(clearError());
        }
    }, [isAuthenticated, navigate, dispatch]);

    const onFinish = (value) => {
        dispatch(loginRequest({
            username: value.username,
            password: value.password
        }));
    }

    return (
        <Row>
            <Col span={12} offset={6}>
                <Card className="w-full max-w-md">
                    <div className="text-center mb-6">
                        <Title level={2}>Login</Title>
                        <p className="text-gray-500">sign in to your account</p>
                    </div>

                    {error && (
                        <Alert
                            message="Login Failed"
                            description={error}
                            type="error"
                            showIcon
                            className="mb-4"
                        />
                    )}

                    <Form
                        name="login"
                        layout="vertical"
                        size="large"
                        form={form}
                        onFinish={onFinish}
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
                                disabled={loading}
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
                                disabled={loading}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block loading={loading}> Sign In</Button>
                        </Form.Item>
                        <div className="text-center">
                            <span className="text-gray-500"> Demo crendentials: </span>
                            <span className="text-sm text-gray-600">
                                username: <strong>johnd</strong>, password: {" "}
                                <strong>m38rmF$</strong>
                            </span>
                        </div>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}
export default LoginPage;