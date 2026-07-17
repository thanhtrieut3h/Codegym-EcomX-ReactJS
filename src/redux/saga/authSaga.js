import { call, put, takeLatest } from 'redux-saga/effects';
import { authAPI } from '../../api/api';
import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../slices/authSlice';

function* login(action) {
    try {
        const response = yield call(authAPI.login, action.payload);
        yield put(loginSuccess({
            token: response.data.token,
            user: { username: action.payload.username }
        }));
    } catch (error) {
        yield put(loginFailure(error.response?.data || 'Login faile'))
    }
}
export function* watchLogin(){
    yield takeLatest(loginRequest.type, login);
}