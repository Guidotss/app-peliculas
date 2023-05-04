import type { AppProps } from 'next/app'
import { UiProvider } from '@/context'; 
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Component {...pageProps} />
    </UiProvider>
  )
}
