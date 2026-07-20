import { call, put, takeLatest } from 'redux-saga/effects';
import { authAPI } from '../../api/api';
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout,
} from '../slices/authSlice';
import { resetCart } from '../slices/cartSlice';
import { persistor } from '../store';

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

function* handleLogout() {
    try {
      // Clear cart khi logout
      yield put(resetCart());
      
      // Xóa toàn bộ persisted state
      yield call([persistor, 'purge']);
      
      // Hoặc chỉ xóa một số state cụ thể
      // yield call([persistor, 'flush']);
    } catch (error) {
      console.error('Logout error:', error);
    }
}

export function* watchLogout() {
    yield takeLatest(logout.type, handleLogout);
}