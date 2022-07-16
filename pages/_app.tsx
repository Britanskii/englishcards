import '../styles/globals.sass'
import '../styles/button.sass'
import '../styles/colors.sass'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider, Hydrate} from "react-query";
import {useState} from "react";

const MyApp = ({Component, pageProps}: AppProps) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchOnMount: false,
                retry: false,
                staleTime: 12000
            }
        }
    }))


    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
