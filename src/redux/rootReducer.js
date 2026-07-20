import productReducer from './slices/productSlice';
import productDetailReducer from './slices/productDetailSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // localStorage
  
  // Cấu hình persist riêng cho cart (có thể customize)
const cartPersistConfig = {
    key: 'cart',
    storage,
    whitelist: ['carts', 'totalItems', 'totalPrice'], // Chỉ lưu những field cần thiết
};

// Cấu hình persist cho auth
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['isAuthenticated', 'token', 'user'], // Lưu những field này
  };

const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    auth: persistReducer(authPersistConfig, authReducer),
    users: userReducer,
});
export default rootReducer;
