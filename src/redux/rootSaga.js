import { all, fork } from 'redux-saga/effects';
import { watchFetchProducts } from './saga/productSaga';
import { watchFetchProductById } from './saga/productDetailSaga';

export default function* rootSaga(){
    yield all([
        fork(watchFetchProducts),
        fork(watchFetchProductById),
    ]);
}