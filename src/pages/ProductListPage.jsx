import {
    Row, Col, Card, Input,
    Select, Button,
    Spin, Pagination, Empty
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const ProductListPage = () => {

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
                    />
                    <Select
                        placeholder='Select Category'
                        size='large'
                        className='w-48'
                        allowClear
                    >
                        <Option key={`men's clothing`} value={`men's clothing`}>
                            men's clothing
                        </Option>
                        <Option key={`electronics`} value={`electronics`}>
                            electronics
                        </Option>
                    </Select>
                </div>
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={6}>
                    <Card
                        hoverable
                        cover={
                            <img
                                src='https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png'
                                alt='SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s'
                                className='h-48 object-contain p-4'
                            />
                        }
                    >
                        <Card.Meta
                            title={
                                <div className='text-sm truncate'>
                                    SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
                                </div>
                            }
                            description={
                                <>
                                    <div className='text-lg font-bold text-red-600'>
                                        $ 109
                                    </div>
                                    <div className='text-xs text-gray-500 mb-2'>
                                        electronics
                                    </div>
                                    <div className='flex gap-2'>
                                        <Button
                                            type='primary'
                                            size='small'
                                            className='flex-1'
                                        >
                                            Add to Cart
                                        </Button>
                                        <Button size='small'> View </Button>
                                    </div>
                                </>
                            }
                        />
                    </Card>
                </Col>
            </Row>
            <div className='mt-6 flex justify-center'>
                <Pagination
                    current={1}
                    total={10}
                    pageSize={5}
                    showSizeChanger={false}
                />
            </div>
        </div>
    )
}
export default ProductListPage;