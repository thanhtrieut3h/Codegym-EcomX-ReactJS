import AppRouter from "./routes/AppRouter";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import PersistLoading from './components/Common/PersistLoading';

const AppEcomx = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<PersistLoading/>} persistor={persistor}>
                <AppRouter/>
            </PersistGate>
        </Provider>
    )
}
export default AppEcomx;