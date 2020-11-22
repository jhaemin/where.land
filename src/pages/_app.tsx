import '@/styles/globals.scss'
import { AuthData } from '@/types'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'
import { RecoilRoot } from 'recoil'

type WhereLandAppProps = AppProps & {
  authData: AuthData | undefined
}

type AuthContextType = {
  isSigned: boolean
}

const AuthContext = createContext<AuthContextType>({
  isSigned: false,
})

function WhereLandApp({ Component, pageProps, authData }: WhereLandAppProps) {
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
        {/* <AuthContext.Provider
          value={{
            isSigned: authData ? true : false,
          }}
        > */}
        <div className="background"></div>
        <Component {...pageProps} />
        <div id="actions-pop-up"></div>
        {/* </AuthContext.Provider> */}
      </RecoilRoot>
    </>
  )
}

WhereLandApp.getInitialProps = async (appContext: AppContext) => {
  const { ctx: context } = appContext

  const cookies = new Cookies(
    context.req as IncomingMessage,
    context.res as ServerResponse
  )

  const accessToken = cookies.get('accessToken')

  let authData: AuthData | undefined = undefined

  if (accessToken) {
    try {
      // authData = verifyToken(accessToken)
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        // Expired access token

        console.log('Expired access token')
        const refreshToken = cookies.get('refreshToken')

        if (refreshToken) {
          try {
            // authData = verifyToken(refreshToken)

            // const { data: user } = await Axios.get('/api/find-user', {
            //   data: {
            //     userID: authData.userID,
            //   },
            // })

            // console.log(user)

            // If the state of the refresh token has been changed,
            // throw an error
            // if (user?.refreshToken !== refreshToken) {
            //   throw Error('Wrong refresh token')
            // }

            // const newAccessToken = signAccessToken(authData)
            console.log('Signed new access token')

            // Set the new access token to the cookie
            // cookies.set('accessToken', newAccessToken, {
            //   path: '/',
            //   httpOnly: true,
            // })
          } catch (err) {
            // Refresh token has been expired or malformed
            console.log('Refresh token has expired or malformed')
          }
        }
      } else {
        // Malformed access token
      }
    }
  }

  const appProps = await App.getInitialProps(appContext)

  return { ...appProps, authData }
}

export default WhereLandApp
