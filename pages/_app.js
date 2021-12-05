import '../material-icons.css'
import '../tailwind.css'

import Head from 'next/head'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
