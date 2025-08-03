import { useEffect } from 'react';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import Head from "next/head"

const load = () => {
    const router = useRouter()
    useEffect(async () => {
        
    })
    return (
        <html lang="pt-BR">
            <head>
                <meta property="theme-color" content="#010101" />
                <meta property="og:title" content="CoguBot" />
                <meta property="og:site_name" content="Cogu Site" />
                <meta property="og:url" content="https://cogu.vercel.app/br" />                
                <meta property="og:image" content="/avatar/Roxo.png" />
                <meta property="og:description" content="Hola soy CoguBot, no tengo nada que decir. ¡Buen día!" />
            </head>

            <style>{`
                h1 {
                    margin: 20px auto;
                    font-size: 25px;
                }
            `}</style>

            <body id="main">
                <h1>Não existe nada ainda, TMJ</h1>
            </body>
        </html>
    )
}

export default load