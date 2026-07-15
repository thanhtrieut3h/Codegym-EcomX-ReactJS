import productReducer from './slices/productSlice';
import productDetailReducer from './slices/productDetailSlice';
import cartReducer from './slices/cartSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
});
export default rootReducer;
