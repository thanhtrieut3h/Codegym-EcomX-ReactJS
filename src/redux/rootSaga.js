import { all, fork } from 'redux-saga/effects';
import { watchFetchProducts, watchFetchCategories } from './saga/productSaga';
import { watchFetchProductById } from './saga/productDetailSaga';
import { watchLogin, watchLogout } from './saga/authSaga';
import { watchFetchAllUsers, watchFetchUserInfoById } from './saga/userSaga';

export default function* rootSaga(){
    yield all([
        fork(watchFetchProducts),
        fork(watchFetchProductById),
        fork(watchFetchCategories),
        fork(watchLogin),
        fork(watchFetchAllUsers),
        fork(watchFetchUserInfoById),
        fork(watchLogout),
    ]);
}