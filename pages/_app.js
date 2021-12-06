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
      <div className='flex justify-between bg-my-p min-w-full py-4 px-4 gap-3 rounded-b-xl'>
        <div className='flex gap-3'>
          <span className='material-icons text-my-s-thin'>drive_eta</span>
          <p className='text-my-s-thin'>Parkigo</p>
        </div>
        <span className='material-icons text-my-s-thin'>menu</span>
      </div>
      <Component {...pageProps} />
      <div className='flex justify-between bg-my-p min-w-full py-5 px-8 gap-3 rounded-t-xl  text-my-s-thin'>
        <span className='material-icons-outlined'>home</span>
        <span className='material-icons-outlined'>explore</span>
        <span className='material-icons-outlined'>location_searching</span>
        <span className='material-icons-outlined'>person_pin_circle</span>
        <span className='material-icons-outlined'>contact_support</span>
      </div>
    </>
  )
}

export default MyApp
