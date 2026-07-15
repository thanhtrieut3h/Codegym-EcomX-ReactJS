import { Row, Col, Card, Button, Typography, Spin, Result, message } from "antd";
import SliderApp from "../components/Home/Slider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequest } from "../redux/slices/productSlice";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/slices/cartSlice';

const { Title } = Typography;

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      image: product.image
    }));
    message.success('Added to cart !');
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spin size="large" tip="Loading ... " />
      </div>
    );
  }
  if (error) {
    return (
        <Result
            status="warning"
            title={error}
        />
    );
  }
  const featuredProducts = products.slice(0, 8); // lay ra 8 san pham

  return (
    <>
      <SliderApp
        title="Welcome to Luxury Shop"
        paragraph="Discover amazing products at great price"
      />
      <div className="container mx-auto">
        <Title level={2} className="mb-6">
          {" "}
          San pham noi bat
        </Title>
        <Row gutter={[16, 16]}>
            {featuredProducts.map((pd) => (
            <Col xs={24} sm={12} md={6} lg={3} key={pd.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={pd.title}
                      src={pd.image}
                      className="h-40 object-contain p-4"
                    />
                  }
                >
                    <Card.Meta
                    title={
                      <div className="text-sm truncate">
                        {pd.title}
                      </div>
                    }
                    description={
                      <>
                        <div className="text-lg font-bold text-red-600">
                            $ {pd.price}
                        </div>
                        <Button
                          type="primary"
                          block size="small"
                          onClick={() => handleAddToCart(pd)}
                        >
                            Add to cart
                        </Button>
                      </>
                    }
                    />
                    <Link to={`/products/${pd.id}`}>
                        <Button type="link" size="small" block>
                            View Details
                        </Button>
                    </Link>
                </Card>
            </Col>
            ))}
        </Row>
      </div>
    </>
  );
};
export default HomePage;
