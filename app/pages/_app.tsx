import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Gian Franco Peralta Bravo</title>
            <meta
               name="description"
               content="Hola! Soy Gian Franco soy desarrollador web como +1 año de experiencia, he realizado proyectos con Nextjs,Typescript,Vuejs,Reactjs,etc."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
         </Head>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </>
   )
}
