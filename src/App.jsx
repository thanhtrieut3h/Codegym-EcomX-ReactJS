import AppRouter from "./routes/AppRouter";
import { Provider } from 'react-redux';
import store from './redux/store';

const AppEcomx = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
export default AppEcomx;