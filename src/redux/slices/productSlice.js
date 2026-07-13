import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    categories: [],
    loading: false,
    error: null,
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
        fetchCategoriesRequest: state => {
            state.loading = true;
        },
        fetchCategoriesSuccess : (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        fetchCategoriesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        filterByCategory: (state, action) => {
            state.products = state.products.filter(product => product.category === action.payload);
        }
    }
});
export const {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure,
    filterByCategory,
} = productSlice.actions;

export default productSlice.reducer;