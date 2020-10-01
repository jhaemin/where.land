import '@/styles/globals.scss'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <div id="actions-pop-up"></div>
    </>
  )
}

export default MyApp
