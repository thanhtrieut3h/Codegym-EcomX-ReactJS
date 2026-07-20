import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from "./rootSaga";
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            thunk: false,
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            }
        }).concat(sagaMiddleware)
});
// Tạo persistor
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export default store;