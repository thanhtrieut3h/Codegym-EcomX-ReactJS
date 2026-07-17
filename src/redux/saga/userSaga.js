import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchUserById,
    fetchUserByIdSuccess,
    fetchUserByIdFailure,
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,
} from '../slices/userSlice';
import { userAPI } from '../../api/api';

function* fecthAllUsers(){
    try {
        const response = yield call(userAPI.getAll);
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}
export function* watchFetchAllUsers(){
    yield takeLatest(fetchUsersRequest.type, fecthAllUsers);
}

function* fetchUserInfoById(action){
    try {
        const response = yield call(userAPI.getById, action.payload);
        yield put(fetchUserByIdSuccess(response.data));
    } catch (error) {
        yield put(fetchUserByIdFailure(error.message))
    }
}
export function* watchFetchUserInfoById(){
    yield takeLatest(fetchUserById.type, fetchUserInfoById);
}