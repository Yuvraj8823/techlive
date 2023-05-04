import React,{ useEffect , useState } from 'react'
import '@/styles/globals.scss'
import { Layout } from '@/components'
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider attribute='class' enableSystem={true}>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  )
}
