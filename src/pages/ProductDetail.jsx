import {
    Button, Spin, Rate, Typography, Row, Col,
    Image, Descriptions, Tag, Space, message,
    Card
} from 'antd';
import {
    ShoppingCartOutlined,
    ArrowLeftOutlined,
    MinusOutlined,
    PlusOutlined,
} from '@ant-design/icons';
const { Title, Paragraph } = Typography;

const ProductDetailPage = () => {
    return (
        <div className='container mx-auto p-4'>
            <Button icon={<ArrowLeftOutlined/>} className='mb-4'>
                Back to Products
            </Button>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={10}>
                    <Card>
                        <Image
                            src='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png'
                            alt='Mens Casual Premium Slim Fit T-Shirts'
                            className='w-full object-contain'
                            style={{height: '400px'}}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={14}>
                   <Card>
                        <Title level={2}>Mens Casual Premium Slim Fit T-Shirts</Title>
                        <Space className='mb-4'>
                            <Rate disabled defaultValue={3.9} />
                            <span className='text-gray-500'>
                                (120 reviews)
                            </span>
                        </Space>
                        <Descriptions column={1} className='mb-4'>
                            <Descriptions.Item label="Category">
                                <Tag color="blue">men's clothing</Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="Price">
                                <Title level={3} className='text-red-600'>$ 109.95</Title>
                            </Descriptions.Item>
                            <Descriptions.Item label="Description">
                                <Paragraph>
                                    Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                                </Paragraph>
                            </Descriptions.Item>
                        </Descriptions>
                   </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ProductDetailPage;