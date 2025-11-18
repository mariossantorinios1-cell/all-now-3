import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AllNow</title>
        {/* Google Analytics placeholder - set NEXT_PUBLIC_GOOGLE_ANALYTICS_ID */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
