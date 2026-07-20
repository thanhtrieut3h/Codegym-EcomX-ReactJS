import { Spin } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

const PersistLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <div className="text-center">
        <div className="mb-4">
          <ShoppingOutlined className="text-6xl text-white animate-pulse" />
        </div>
        <Spin size="large" tip="Loading your data..." />
        <p className="text-white mt-4 text-lg font-medium">
          Welcome back!
        </p>
      </div>
    </div>
  );
};

export default PersistLoading;