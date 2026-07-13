import { call, put, takeLatest  } from 'redux-saga/effects';
import { productAPI } from '../../api/api';
import {
    fetchProductRequest,
    fetchProductSuccess,
    fetchProductFailure,
    fetchCategoriesRequest,
    fetchCategoriesSuccess,
    fetchCategoriesFailure
} from '../slices/productSlice';

function* fetchCategories(){
    try {
        const response = yield call(productAPI.getCategories);
        yield put(fetchCategoriesSuccess(response.data));
    } catch (error) {
        yield put(fetchCategoriesFailure(error.message));
    }
}
export function* watchFetchCategories(){
    yield takeLatest(fetchCategoriesRequest.type, fetchCategories);
}

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