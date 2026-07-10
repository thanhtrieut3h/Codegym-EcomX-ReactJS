import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
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
        }
    }
});
export const {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure
} = productSlice.actions;

export default productSlice.reducer;