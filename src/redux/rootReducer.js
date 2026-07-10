import productReducer from './slices/productSlice';
import productDetailReducer from './slices/productDetailSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    products: productReducer,
    productDetail: productDetailReducer
});
export default rootReducer;
