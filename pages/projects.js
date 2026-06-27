import React, { useEffect } from 'react';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import Head from "next/head";

function page(props) {
    useEffect(() => {
        let navLinks = document.getElementsByClassName('navlink')
        for (let navlink of navLinks) {
            if (navlink.innerText == 'Projetos') navlink.className = 'navlink active'
            else navlink.className = 'navlink'
        }
        
    })

    return (
        <main>
            <Head>
                <title>Cogu Site</title>

                <meta property="theme-color" content="#010101" />
                <meta property="og:title" content="CoguBot" />
                <meta property="og:site_name" content="Cogu Site" />
                <meta property="og:url" content="https://cogu.vercel.app/br" />                
                <meta property="og:image" content="/avatar/Roxo.png" />
                <meta property="og:description" content="Olá eu sou o CoguBot, não tenho nada a dizer. Bom dia!" />
            </Head>
            <head>     
            </head>
        </main>
    )
}

export async function getStaticProps(a) {
    return {
        props: {
            
        },
        revalidate: 1800
    }
}

export default page