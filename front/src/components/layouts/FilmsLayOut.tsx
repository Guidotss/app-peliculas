import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui'; 

interface FilmsLayOutProps {
    title: string; 
    pageDescription: string;
    imageFullUrl?: string;
    children: React.ReactNode;
}

export const FilmsLayOut:FC<FilmsLayOutProps> = ({ title, pageDescription, imageFullUrl, children }) => {
  return (
    <>
        <Head>
            <title>{title || 'Guivana 2'}</title>
            <meta name="Author" content='Guido Olguin'/>
            <meta name='og:title' content={title} /> 
            <meta name='og:description' content={pageDescription} />
            {imageFullUrl && <meta name='og:image' content={imageFullUrl} />}
            <meta name='og:type' content='website' />
            <meta name='og:locale' content='es_ES' />
            <meta name='og:site_name' content='Guivana 2' />
            <meta name='robots' content='index, follow' />
            <meta name='keywords' content='Guivana 2, Guivana, Films' />
        </Head>
        <header>
            <Navbar/>
        </header>
        <main>
            { children }
        </main>
    </>
  )
}
