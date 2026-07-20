import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu, Badge, Button, Avatar } from "antd";
import {
    ShoppingCartOutlined,
    UserOutlined,
    HomeOutlined,
    ProductOutlined,
    LoginOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { persistor } from '../redux/store';

const { Header: AntHeader } = Layout;
const HeaderApp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { totalItems } = useSelector(state => state.cart);
    const { isAuthenticated, user } = useSelector(state => state.auth);

    const handleLogout = async () => {
        dispatch(logout());
        // Purge persisted state
        await persistor.purge();
        navigate("/login");
    }

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
                <Badge count={totalItems} size="small">
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
            label: <Link to="/profile">{user?.username || 'profile'}</Link>
        });
        menuItems.push({
            key: 'logout',
            icon: <LogoutOutlined/>,
            label: <Button type="text" onClick={() => handleLogout()}> Logout </Button>
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