import { Card, Typography, Descriptions, Button, Spin, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";


const { Title } = Typography;

const UserProfile = () => {
    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <Card>
                <div className="flex items-center gap-6 mb-6">
                    <Avatar size={80} icon={<UserOutlined/>} />
                    <div>
                        <Title level={2}> Nguyen Thanh Trieu </Title>
                        <p className="text-gray-500">trieunt6</p>
                    </div>
                </div>
                <Descriptions bordered column={{xs: 1, sm: 2}}>
                    <Descriptions.Item label="Email">trieunt@gmail.com</Descriptions.Item>
                    <Descriptions.Item label="Phone">0975091304</Descriptions.Item>
                    <Descriptions.Item label="City">Ha Noi</Descriptions.Item>
                    <Descriptions.Item label="Street">My Dinh - Tu Liem</Descriptions.Item>
                    <Descriptions.Item label="Number">12/366</Descriptions.Item>
                    <Descriptions.Item label="Zipcode">100000</Descriptions.Item>
                </Descriptions>
                <div className="mt-6 flex gap-4">
                    <Button type="primary">Edit Profile</Button>
                    <Button type="link"> Back to Home</Button>
                </div>
            </Card>
        </div>
    )
}
export default UserProfile;