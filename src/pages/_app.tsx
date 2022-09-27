import type { AppProps } from 'next/app'
import Head from 'next/head'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Steven&apos;s Webshop</title>
      <meta name="description" content="A very real webshop" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🛒</text></svg>" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}
export default MyApp
