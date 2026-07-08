import { call, put, takeLatest  } from 'redux-saga/effects';
import { productAPI } from '../../api/api';
import {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure
} from '../slices/productSlice';

function* fetchProducts(){
    try {
        const response = yield call(productAPI.getAll);
        yield put(fetchProductSuccess(response.data));
    } catch (error) {
        yield put(fetchProductFailure(error.message));
    }
}
export function* watchFetchProducts(){
    yield takeLatest(fetchProductRequest.type, fetchProducts);
}