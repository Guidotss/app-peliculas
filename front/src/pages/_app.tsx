import type { AppProps } from 'next/app'
import { AuthProvider, UiProvider } from '@/context'; 
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>  
    </UiProvider>
  )
}
