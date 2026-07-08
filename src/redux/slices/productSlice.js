import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    loading: false,
    error: null,
    selectedProduct: null,
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // di lay du lieu tu api
        fetchProductRequest: state => {
            state.loading = true;
            state.error = null;
        },
        fetchProductSuccess: (state, action) => {
            state.loading = false;
            state.products = action.payload;
        },
        fetchProductFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearSelectedProduct: state => {
            state.selectedProduct = null;
        },
        clearProducts: state => {
            state.products = [];
            state.selectedProduct = null;
            state.error = null;
        } 
    }
});
export const {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
    clearSelectedProduct,
    clearProducts
} = productSlice.actions;

export default productSlice.reducer;