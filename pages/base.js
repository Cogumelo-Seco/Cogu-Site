import { useEffect } from 'react';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import Head from "next/head"

const load = () => {
    let cookiesProps = require('../lib/data').cookies
    let cookie = cookies(cookiesProps)

    const router = useRouter()
    useEffect(async () => {
        
    })
    return (
        <html lang="pt-BR">
            <head>
                
            </head>

            <style>{`
                header, footer {
                    display: none
                }
            `}</style>

            <body id="main">

            </body>
        </html>
    )
}

export default load