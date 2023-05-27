import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />

        <title>CrowdWRK</title>
        <meta name="description" content="CROWD-WRK-FRONt-END" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"  rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>

  )
}
