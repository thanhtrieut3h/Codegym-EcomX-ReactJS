import { call, put, takeLatest } from 'redux-saga/effects';
import { productAPI } from '../../api/api';
import {
    fetchProductByIdRequest,
    fetchProductByIdSuccess,
    fetchProductByIdFailure
} from '../slices/productDetailSlice';

function* fetchProductById(action){
    try {
        const response = yield call(productAPI.getById, action.payload);
        yield put(fetchProductByIdSuccess(response.data));
    } catch (error) {
        yield put(fetchProductByIdFailure(error.message));
    }
}

export function* watchFetchProductById(){
    yield takeLatest(fetchProductByIdRequest.type, fetchProductById);
}