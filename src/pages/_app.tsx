import '@/styles/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

function WhereLandApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/fonts/framework7-icons.css" />
        <link rel="stylesheet" href="/fonts/payw-pro.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <RecoilRoot>
        <div className="background"></div>
        <Component {...pageProps} />
        <div id="actions-pop-up"></div>
      </RecoilRoot>
    </>
  )
}

export default WhereLandApp
