import { Link } from 'react-router-dom';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const SliderApp = ({ title, paragraph }) => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 mb-8'>
            <div className='container mx-auto text-center'>
                <Title className='text-white'>{title}</Title>
                <Paragraph className='text-xl text-gray-100'>
                    {paragraph}
                </Paragraph>
                <Link to="/products">
                    <Button type='primary' size='large' className='bg-white text-blue-600'>
                        Shop Now
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default SliderApp;