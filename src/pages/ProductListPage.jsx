import {
    Row, Col, Card, Input,
    Select, Button,
    Spin, Pagination, Empty
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductRequest, fetchCategoriesRequest } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { Option } = Select;

const ProductListPage = () => {
    const dispatch = useDispatch();
    const { products, categories, loading, error } = useSelector(state => state.products);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    useEffect(() => {
        dispatch(fetchProductRequest());
        dispatch(fetchCategoriesRequest());
    }, [dispatch]);

    // filter products
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase());
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        return matchesSearch && matchesCategory;
    });
    // panigation
    const startIndex = (currentPage - 1) * pageSize;
    const panigatedProducts = filteredProducts.slice(startIndex, startIndex + pageSize);

    if(loading) {
        return (
            <div className='flex justify-center items-center h-64'>
                <Spin size='large' tip="Loading ..." />
            </div>
        )
    }
    if(products.length === 0 || error !== null){
        return (
            <Empty description="No products found !" />
        )
    }

    return (
        <div className='container mx-auto p-4'>
            <div className='mb-6'>
                <h1 className='text-3xl font-bold mb-4'>Products</h1>
                <div className='flex flex-wrap gap-4'>
                    <Search
                        placeholder='Search product ...'
                        allowClear
                        enterButton={<SearchOutlined/>}
                        size='large'
                        className='flex-1 min-w-[200px]'
                        onSearch={value => searchTerm(value)}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <Select
                        placeholder='Select Category'
                        size='large'
                        className='w-48'
                        allowClear
                        onChange={value => setSelectedCategory(value)}
                    >
                        {categories.map(category => (
                            <Option key={category} value={category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Option>
                        ))}
                    </Select>
                </div>
            </div>
            <Row gutter={[16, 16]}>
                {panigatedProducts.map(pd => (
                <Col xs={24} sm={12} md={8} lg={6} key={pd.id}>
                    <Card
                        hoverable
                        cover={
                            <img
                                src={pd.image}
                                alt={pd.title}
                                className='h-48 object-contain p-4'
                            />
                        }
                    >
                        <Card.Meta
                            title={
                                <div className='text-sm truncate'>
                                    {pd.title}
                                </div>
                            }
                            description={
                                <>
                                    <div className='text-lg font-bold text-red-600'>
                                        $ {pd.price}
                                    </div>
                                    <div className='text-xs text-gray-500 mb-2'>
                                        {pd.category}
                                    </div>
                                    <div className='flex gap-2'>
                                        <Button
                                            type='primary'
                                            size='small'
                                            className='flex-1'
                                        >
                                            Add to Cart
                                        </Button>
                                        <Link to={`/products/${pd.id}`}>
                                            <Button type='link' size='small'> View </Button>
                                        </Link>  
                                    </div>
                                </>
                            }
                        />
                    </Card>
                </Col>
                ))}
            </Row>
            <div className='mt-6 flex justify-center'>
                <Pagination
                    current={currentPage}
                    total={filteredProducts.length}
                    pageSize={pageSize}
                    showSizeChanger={false}
                    onChange={p => setCurrentPage(p)}
                />
            </div>
        </div>
    )
}
export default ProductListPage;