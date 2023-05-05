import Head from 'next/head'; 
import { FC } from 'react';

interface AuthLayoutProps {
    children: React.ReactNode; 
    title: string; 
    pageDescription: string; 
    fullImageUrl?: string; 
}

export const AuthLayout:FC<AuthLayoutProps> = ({ children, title, pageDescription, fullImageUrl }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name='Author' content='Guido Olguin'/>
            <meta name='description' content={pageDescription}/>
            <meta name='og:title' content={ title }/>
            <meta name='og:description' content={ pageDescription }/>
            <meta name='bots' content='index,follow'/>
            {
                fullImageUrl && (
                    <meta name='og:image' content={fullImageUrl}/>
                )
            }
        </Head>
        <main>
            { children }
        </main>
    </>
  )
}
