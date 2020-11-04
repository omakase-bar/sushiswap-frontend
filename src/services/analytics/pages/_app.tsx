import React, { Context } from 'react'
import '../styles/index.css'
//import { AppProps } from 'next/app'
import GlobalDataContextProvider from '../contexts/globalData'
import ApplicationContextProvider from '../contexts/application'

const ContextProviders = ({ children }: any) => (
  <ApplicationContextProvider>
    <GlobalDataContextProvider>{children}</GlobalDataContextProvider>
  </ApplicationContextProvider>
)
// function App({ Component, pageProps }: AppProps) {
//   return (
//     <ContextProviders>
//       <Component {...pageProps} />
//     </ContextProviders>
//   )
// }

// export default App
export default ContextProviders
