import '../styles/globals.sass'
import '../styles/button.sass'
import '../styles/colors.sass'
import type {AppProps} from 'next/app'
import Clothes from "../components/clothes/Clothes";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "../store";

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <Provider store={store}>
            <Clothes>
                <Component {...pageProps} />
            </Clothes>
        </Provider>
    )
}

export default MyApp
