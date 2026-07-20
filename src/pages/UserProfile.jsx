import { Card, Typography, Descriptions, Button, Spin, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserById, fetchUsersRequest } from '../redux/slices/userSlice';
import { useEffect } from "react";

const { Title } = Typography;

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currrentUser, loading, error, users } = useSelector(state => state.users);
    const { isAuthenticated } = useSelector(state => state.auth);

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login');
            return;
        }
        dispatch(fetchUserById(1)); // fake api
        dispatch(fetchUsersRequest());
    }, [dispatch, isAuthenticated, navigate]);

    if(loading){
        return (
            <div className="flex justify-center items-center h-64">
                <Spin size="large" tip="Loading profile user ..." />
            </div>
        )
    }
    if(!currrentUser || error !== null){
        return (
            <div> User not found ! </div>
        )
    }
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Title level={2}> Detail infomartion of user !</Title>
            <Card>
                <div className="flex items-center gap-6 mb-6">
                    <Avatar size={80} icon={<UserOutlined/>} />
                    <div>
                        <Title level={2}> {currrentUser.name?.firstname} {currrentUser.name?.lastname} </Title>
                        <p className="text-gray-500">{currrentUser.username}</p>
                    </div>
                </div>
                <Descriptions bordered column={{xs: 1, sm: 2}}>
                    <Descriptions.Item label="Email">{currrentUser.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone">{currrentUser.phone}</Descriptions.Item>
                    <Descriptions.Item label="City">{currrentUser.address?.city}</Descriptions.Item>
                    <Descriptions.Item label="Street">{currrentUser.address?.street}</Descriptions.Item>
                    <Descriptions.Item label="Number">{currrentUser.address?.number}</Descriptions.Item>
                    <Descriptions.Item label="Zipcode">{currrentUser.address?.zipcode}</Descriptions.Item>
                </Descriptions>
                <div className="mt-6 flex gap-4">
                    <Button type="primary">Edit Profile</Button>
                    <Button type="link" onClick={() => navigate('/')}> Back to Home</Button>
                </div>
            </Card>
            <Title level={2} className="mt-3 mb-3"> List of users !</Title>
            { users.length === 0 ? (
                <div> Not found data </div>
            ) : users.map(item => (
            <Card key={item.id} style={{ margin: '10px 0px'}}>
                <div className="flex items-center gap-6 mb-6">
                    <Avatar size={80} icon={<UserOutlined/>} />
                    <div>
                        <Title level={2}> {item.name?.firstname} {item.name?.lastname} </Title>
                        <p className="text-gray-500">{item.username}</p>
                    </div>
                </div>
                <Descriptions bordered column={{xs: 1, sm: 2}}>
                    <Descriptions.Item label="Email">{item.email}</Descriptions.Item>
                    <Descriptions.Item label="Phone">{item.phone}</Descriptions.Item>
                    <Descriptions.Item label="City">{item.address?.city}</Descriptions.Item>
                    <Descriptions.Item label="Street">{item.address?.street}</Descriptions.Item>
                    <Descriptions.Item label="Number">{item.address?.number}</Descriptions.Item>
                    <Descriptions.Item label="Zipcode">{item.address?.zipcode}</Descriptions.Item>
                </Descriptions>
            </Card>
            ))}
        </div>
    )
}
export default UserProfile;