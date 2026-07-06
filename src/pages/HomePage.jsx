import { Row, Col, Card, Button, Typography } from "antd";
import SliderApp from "../components/Home/Slider";

const { Title } = Typography;

const HomePage = () => {
    return (
        <>
            <SliderApp
                title='Welcome to Luxury Shop'
                paragraph='Discover amazing products at great price'
            />
            <div className="container mx-auto">
                <Title level={2} className="mb-6"> San pham noi bat</Title>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={6} lg={3}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                                    src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                                    className="h-40 object-contain p-4"/>
                            }
                        >
                            <Card.Meta
                                title={<div className="text-sm truncate">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</div>}
                                description={
                                    <>
                                        <div className="text-lg font-bold text-red-600">
                                            $ 109.95
                                        </div>
                                        <Button type="primary" block size="small"> Add to cart </Button>
                                    </>
                                }
                            />
                            <Button type="link" size="small" block>
                                View Details
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default HomePage