import '@/styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/fonts/framework7-icons.css" />
        <link rel="stylesheet" href="/fonts/payw-pro.css" />
      </Head>
      <RecoilRoot>
        <div className="background"></div>
        <Component {...pageProps} />
        <div id="actions-pop-up"></div>
      </RecoilRoot>
    </>
  )
}

export default MyApp
