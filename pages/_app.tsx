import '../styles/globals.sass'
import '../styles/button.sass'
import '../styles/colors.sass'
import type {AppProps} from 'next/app'

import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
    connectToDevTools: true
});

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
