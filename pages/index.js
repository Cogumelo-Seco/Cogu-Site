import React, { useEffect } from 'react';
import cookies from 'next-cookies';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import Head from "next/head";

function page(props) {
    useEffect(() => {
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
                <link rel="stylesheet" href="/css/home/animations.css" />
                <link rel="stylesheet" href="/css/home/home.css" />  
                <link rel="stylesheet" href="/css/home/resize.css" />
            </head>
        
            <div class="infoContaner">
                <h1 class="glitcTitle" data-text="COGU">COGU</h1>

                <p class="infoSubtitle">Programador, criador de bots e projetos digitais com estética dark fantasy, glitch e roxo.</p>

                <div class="tags">
                    <span>Dev</span>
                    <span>BotMaker</span>
                    <span>DarkFantasy</span>
                    <span>PixelGlitch</span>
                    <span>DarkFantasy</span>
                </div>
            </div>

            <div class="cardsContainer">
                <a href="/projects" class="pixelCard">
                    <div class="pixel-text">
                        <h2 data-text="Projetos">Projetos</h2>
                        <p>Uma coleção de ideias que saíram da cabeça, passaram pelo caos e viraram código.</p>
                    </div>

                    <div class="pixel-arrow">&gt;_</div>
                </a>

                <a href="https://glitchboundfunk.vercel.app/" target="_blank" class="pixelCard">
                    <div class="pixel-text">
                        <h2 data-text="Glitchbound Funk">Glitchbound Funk</h2>
                        <p>Um jogo de ritmo inspirado em Friday Night Funkin’, focado em gameplay, e funcionalidades.</p>
                    </div>

                    <div class="pixel-arrow">&gt;_</div>
                </a>

                <a href="https://neural-blocks.vercel.app" target="_blank" class="pixelCard">
                    <div class="pixel-text">
                        <h2 data-text="Neural Blocks">Neural Blocks</h2>
                        <p>Rede neural evolutiva onde pequenos blocos aprendem sozinhos a sobreviver.</p>
                    </div>

                    <div class="pixel-arrow">&gt;_</div>
                </a>
            </div>
        </main>
    )
}

export async function getStaticProps(a) {
    return {
        props: { },
        revalidate: 1800
    }
}

export default page