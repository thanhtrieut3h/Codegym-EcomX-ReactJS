import productReducer from './slices/productSlice';
import productDetailReducer from './slices/productDetailSlice';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    auth: authReducer,
    users: userReducer,
});
export default rootReducer;
