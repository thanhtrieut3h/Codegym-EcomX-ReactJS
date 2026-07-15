import {
    Button, Spin, Rate, Typography, Row, Col,
    Image, Descriptions, Tag, Space, message,
    Card, Result
} from 'antd';
import {
    ShoppingCartOutlined,
    ArrowLeftOutlined,
    MinusOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdRequest, clearSelectedProduct } from '../redux/slices/productDetailSlice';
import { addToCart } from '../redux/slices/cartSlice';

const { Title, Paragraph } = Typography;

const ProductDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { productDetail, loading, error } = useSelector(state => state.productDetail);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchProductByIdRequest(id));
        return () => {
            dispatch(clearSelectedProduct());
        }
    }, [dispatch, id]);

    const handleQuantityChange = (type) => {
        if(type === 'increase'){
            setQuantity(pre => pre + 1);
        } else if(type === 'decrease' && quantity > 1){
            setQuantity(pre => pre - 1);
        }
    }
    const handleAddToCart = () => {
        if(productDetail){
            dispatch(addToCart({
                productId: productDetail.id,
                title: productDetail.title,
                price: productDetail.price,
                quantity: quantity,
                image: productDetail.image
            }));
            message.success(`Added ${quantity} item(s) to cart`);
        }
    }

    if(loading){
        return (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" tip="Loading ... " />
            </div>
        );
    }
    if(!productDetail || error !== null){
        return (
            <Result
                status="warning"
                title={error}
            />
        );
    }

    return (
        <div className='container mx-auto p-4'>
            <Button
                icon={<ArrowLeftOutlined/>}
                className='mb-4'
                onClick={() => navigate('/products')}
            >
                Back to Products
            </Button>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={10}>
                    <Card>
                        <Image
                            src={productDetail.image}
                            alt={productDetail.title}
                            className='w-full object-contain'
                            style={{height: '400px'}}
                        />
                    </Card>
                </Col>
                <Col xs={24} md={14}>
                   <Card>
                        <Title level={2}>
                            {productDetail.title}
                        </Title>
                        <Space className='mb-4'>
                            <Rate disabled defaultValue={productDetail.rating?.rate || 0} />
                            <span className='text-gray-500'>
                                ({productDetail.rating?.count || 0} reviews)
                            </span>
                        </Space>
                        <Descriptions column={1} className='mb-4'>
                            <Descriptions.Item label="Category">
                                <Tag color="blue">
                                    {productDetail.category}
                                </Tag>
                            </Descriptions.Item>
                            <Descriptions.Item label="Price">
                                <Title level={3} className='text-red-600'>$ {productDetail.price}</Title>
                            </Descriptions.Item>
                            <Descriptions.Item label="Description">
                                <Paragraph>
                                    {productDetail.description}
                                </Paragraph>
                            </Descriptions.Item>
                        </Descriptions>
                        <div className='flex items-center gap-4 mb-4'>
                            <span className='font-medium'>Quantity : </span>
                            <Button
                                icon={<MinusOutlined/>}
                                onClick={() => handleQuantityChange('decrease')}
                            />
                            <span className='text-lg font-bold w-8 text-center'> {quantity} </span>
                            <Button
                                icon={<PlusOutlined/>}
                                onClick={() => handleQuantityChange('increase')}
                            />
                        </div>
                        <Button
                            type='primary'
                            size='large'
                            icon={<ShoppingCartOutlined/>}
                            className='w-full'
                            onClick={() => handleAddToCart()}
                        > Add to Cart</Button>
                   </Card>
                </Col>
            </Row>
        </div>
    )
}
export default ProductDetailPage;