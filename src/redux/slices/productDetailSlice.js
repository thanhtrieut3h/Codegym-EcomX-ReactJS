import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productDetail: null,
    loading: false,
    error: null
}
const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        fetchProductByIdRequest: state => {
            state.loading = true;
            state.error = null;
        },
        fetchProductByIdSuccess: (state, action) => {
            state.loading = false;
            state.productDetail = action.payload;
        },
        fetchProductByIdFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearSelectedProduct: state => {
            state.productDetail = null;
        },
    }
});
export const {
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
    clearSelectedProduct
} = productDetailSlice.actions;

export default productDetailSlice.reducer;