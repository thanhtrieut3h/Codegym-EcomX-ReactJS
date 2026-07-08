import productReducer from './slices/productSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    products: productReducer
});
export default rootReducer;
