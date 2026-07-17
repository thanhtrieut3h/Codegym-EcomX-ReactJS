import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "antd";
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetail";
import ProductListPage from "../pages/ProductListPage";
import CartPage from "../pages/CartPage";
import UserProfile from "../pages/UserProfile";
import { useSelector } from "react-redux";

const { Content } = Layout;

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    return isAuthenticated ? children : <Navigate to={`/login`} />
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout className="min-h-screen">
                <HeaderApp/>
                <Content className="p-6 bg-gray-50">
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/products" element={<ProductListPage/>} />
                        <Route path="/products/:id" element={<ProductDetailPage/>} />
                        <Route path="/cart" element={<CartPage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute>
                                    <UserProfile/>
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </Content>
                <FooterApp/>
            </Layout>
        </BrowserRouter>
    )
}
export default AppRouter;