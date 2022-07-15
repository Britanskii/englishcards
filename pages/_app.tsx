import '../styles/globals.sass'
import '../styles/button.sass'
import '../styles/colors.sass'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
