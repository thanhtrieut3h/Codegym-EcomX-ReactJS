import { Link } from "react-router-dom";
import { Layout, Menu, Badge, Button, Avatar } from "antd";
import {
    ShoppingCartOutlined,
    UserOutlined,
    HomeOutlined,
    ProductOutlined,
    LoginOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const HeaderApp = () => {
    const isAuthenticated = false;
    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined/>,
            label: <Link to="/"> Home </Link>
        },
        {
            key: 'products',
            icon: <ProductOutlined/>,
            label: <Link to="/products"> Products </Link>
        },
        {
            key: 'cart',
            icon: (
                <Badge count={0} size="small">
                    <ShoppingCartOutlined/>
                </Badge>
            ),
            label: <Link to="/cart"> Cart </Link>
        }
    ];
    if(isAuthenticated) {
        menuItems.push({
            key: 'profile',
            icon: <Avatar size="small" icon={<UserOutlined/>} />,
            label: <Link to="/profile"> TrieuNT</Link>
        });
        menuItems.push({
            key: 'logout',
            icon: <LogoutOutlined/>,
            label: <Button type="text"> Logout </Button>
        });
    } else {
        menuItems.push({
            key: 'login',
            icon: <LoginOutlined/>,
            label: <Link to="/login"> Login </Link>
        });
    }

    return (
        <AntHeader style={{background: '#fff', boxShadow: '0 2px 8px rgb(0,0,0,0.1)'}}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-xl font-bold text-blue-600">
                    <Link to="/">Shop Luxury</Link>
                </div>
                <Menu
                    mode="horizontal"
                    items={menuItems}
                    style={{border: 'none', flex: 1, justifyContent: 'flex-end'}}/>
            </div>
        </AntHeader>
    )
}
export default HeaderApp;