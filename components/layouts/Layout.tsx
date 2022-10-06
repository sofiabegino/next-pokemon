import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui'

interface Props {
    title?: string
}

export const Layout: FC<PropsWithChildren<Props>> = ({children,title}) => {
  return (
        <>
        <Head>
             <title>{ title || "Pokemon"}</title>
             <meta name="author" content="Sofia Begino" / >
             <meta name="description" content={`Información sobre el  pókemon ${title}`} / >
             <meta name="keywords" content={`${title}, pókemon, pokedex`} / >

             </Head>
                <Navbar />

                <main style={{
                    padding:'0px 20px'
                }}>
                    {children}
                </main>
        </>
  )
}
