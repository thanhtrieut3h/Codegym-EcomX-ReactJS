import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users : [],
    currrentUser: null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetchUsersRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchUserById: (state) => {
            state.loading = true;
        },
        fetchUserByIdSuccess: (state, action) => {
            state.loading = false;
            state.currrentUser = action.payload;
        },
        fetchUserByIdFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        clearCurrentUser: state => {
            state.currrentUser = null;
        }
    }
});

export const {
    fetchUserById,
    fetchUserByIdSuccess,
    fetchUserByIdFailure,
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,
    clearCurrentUser
} = userSlice.actions;

export default userSlice.reducer;
