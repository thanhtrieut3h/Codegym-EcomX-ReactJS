import {
    Table, Button, Typography, Empty,
    Card, Space, Popconfirm, InputNumber, message
} from 'antd';
import {
    DeleteOutlined,
    ShoppingCartOutlined,
    ClearOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const CartPage = () => {
    const columns = [
        {
            title: 'Product',
            dataIndex: 'image',
            key: 'image',
            render: (image, record) => (
                <div className='flex items-center gap-4'>
                    <img src={image} alt={record.title} className='w-16 h-16 object-contain' />
                    <div>
                        <div className='font-medium'>{record.title}</div>
                        <div className='text-sm text-gray-500'>${record.price}</div>
                    </div>
                </div>
            )
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (quantity, record) => (
                <InputNumber
                    min={1}
                    max={99}
                    value={quantity}
                    className='w-20'
                />
            )
        },
        {
            title: 'Total',
            key: 'total',
            render: (_, record) => (
                <Text strong>${(record.price * record.quantity).toFixed(2)}</Text>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Popconfirm
                    title="Remove item ?"
                    okText="Yes"
                    cancelText="No"
                >
                    <Button
                       type='danger'
                       icon={<DeleteOutlined/>}
                       size='small'
                    >
                        Remove
                    </Button>
                </Popconfirm>
            )
        }
    ];

    return (
        <div className='container mx-auto p-4'>
            <div className='flex justify-between items-center mb-6'>
                <Title level={2}>Shopping Cart</Title>
                <Space>
                    <Popconfirm
                        title="Clear all item ?"
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type='danger' icon={<ClearOutlined/>}> Clear Cart</Button>
                    </Popconfirm>
                    <Link to={`/products`}>
                        <Button type='primary'>Continue Shopping</Button>
                    </Link>
                </Space>
            </div>
            <Table
                columns={columns}
                dataSource={[]}
                rowKey="productId"
                pagination={false}
            />
            <Card className='mt-6'>
                <div className='flex justify-end gap-8'>
                    <div>
                        <Text className='text-lg'>
                            Total Items: <strong> 4 </strong>
                        </Text>
                    </div>
                    <div>
                        <Text className='text-lg'>
                            Total Price: <strong className='text-red-600 text-xl'> 100000</strong>
                        </Text>
                    </div>
                    <Button type='primary' size='large'>
                        Proceed to checkout
                    </Button>
                </div>
            </Card>
        </div>
    )
}
export default CartPage;