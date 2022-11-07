import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Mission Technius</title>
      <link rel='icon' type="image/svg" href="/TechniusIcon.svg" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
