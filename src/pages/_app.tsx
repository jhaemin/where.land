import '@/styles/globals.scss'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="background"></div>
      <Component {...pageProps} />
      <div id="actions-pop-up"></div>
    </RecoilRoot>
  )
}

export default MyApp
