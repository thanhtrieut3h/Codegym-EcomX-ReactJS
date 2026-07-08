import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import HeaderApp from '../components/HeaderApp';
import FooterApp from '../components/FooterApp';
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetail";

const { Content } = Layout;

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Layout className="min-h-screen">
                <HeaderApp/>
                <Content className="p-6 bg-gray-50">
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/products/:id" element={<ProductDetailPage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </Content>
                <FooterApp/>
            </Layout>
        </BrowserRouter>
    )
}
export default AppRouter;