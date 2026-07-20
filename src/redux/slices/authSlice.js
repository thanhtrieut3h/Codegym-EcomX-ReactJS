import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: state => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
        },
        setUser : (state, action) => {
            state.user = action.payload;
        },
        clearError : state => {
            state.error = null;
        },
        // Reset auth state
        resetAuth: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    }
});
export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
    setUser,
    clearError,
    resetAuth
} = authSlice.actions;

export default authSlice.reducer;