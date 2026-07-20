import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    currentCart: null,
    loading: false,
    error: null,
    totalItems: 0,
    totalPrice: 0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        fetchCartRequest: state => {
            state.loading = true;
        },
        fetchCartSuccess: (state, action) => {
            state.loading = false;
            state.carts = action.payload;
        },
        fecthCartFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addToCart: (state, action) => {
            const existingItem = state.carts.find(item => item.productId === action.payload.productId);
            if(existingItem){
                // san pham da co trong gio hang roi
                existingItem.quantity += action.payload.quantity; // cap nhat lai so luong mua
            } else {
                // san pham chua co trong gio hang
                // them moi san pham vao gio hang
                state.carts.push(action.payload);
            }
            // cap nhat tong so luong san pham
            state.totalItems += action.payload.quantity;
            // cap nhat tong so tien can thanh toan
            state.totalPrice += action.payload.price * action.payload.quantity;
        },
        removeFromCart: (state, action) => {
            // tim san pham can xoa co ton tai trong gio hang
            const item = state.carts.find(pd => pd.productId === action.payload.productId);
            if(item){
                // san pham da co trong gio hang
                // giam tong so san pham trong gio hang
                state.totalItems -= item.quantity;
                //  tinh lai tong so tien can thanh toan
                state.totalPrice -= item.price * item.quantity;
                // loai san pham khoi gio hang - cap nhat lai gio hang
                state.carts = state.carts.filter(pd => pd.productId !== action.payload.productId);
            }
        },
        updateCartQuantity: (state, action) => {
            // biet san pham nao can cap nhat va so luong la gi ?
            const { productId, quantity } = action.payload;
            const item = state.carts.find(pd => pd.productId === productId);
            if(item){
                const diff = quantity - item.quantity; // tang len hoac giam xuong
                state.totalItems += diff;
                state.totalPrice += diff * item.price;
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.carts = [];
            state.totalItems =  0;
            state.totalPrice = 0;
        },
        setCurrentCart: (state, action) => {
            state.currentCart = action.payload;
        },
        // Reset cart state (cho logout)
        resetCart: (state) => {
            state.carts = [];
            state.currentCart = null;
            state.totalItems = 0;
            state.totalPrice = 0;
            state.error = null;
        },
    }
});
export const {
    fetchCartRequest,
    fetchCartSuccess,
    fecthCartFailure,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    setCurrentCart,
    resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;