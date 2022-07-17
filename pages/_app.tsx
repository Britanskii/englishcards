import '../styles/globals.sass'
import '../styles/button.sass'
import '../styles/colors.sass'
import type {AppProps} from 'next/app'
import Clothes from "../components/clothes/Clothes";

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <Clothes>
            <Component {...pageProps} />
        </Clothes>
    )
}

export default MyApp
