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

            <section class="hero">
                <div class="infoContaner">
                    <h1 class="glitcTitle" data-text="COGU">COGU</h1>

                    <p class="infoSubtitle">Programador, criador de bots e projetos digitais com estética dark fantasy, glitch e roxo.</p>

                    <div class="tags">
                        <span>Dev</span>
                        <span>BotMaker</span>
                        <span>DarkFantasy</span>
                        <span>PixelGlitch</span>
                    </div>
                </div>

                <div onClick={() => open('https://github.com/Cogumelo-Seco')} class="avatar-panel">
                    <img src="/imgs/Cogu-avatar/Default.png" class="avatar-img" />
                </div>
            </section>

            <div class="cardsContainer">
                <a href="/projects" class="pixelCard">
                    <div class="pixel-text">
                        <h2>
                            <svg class="icon icon-projects" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 20C8 17.8 9.8 16 12 16H24L29 22H52C54.2 22 56 23.8 56 26V48C56 50.2 54.2 52 52 52H12C9.8 52 8 50.2 8 48V20Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                                <path d="M20 37L15 32L20 27" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M44 27L49 32L44 37" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M35 26L29 38" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
                                <path d="M10 44H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
                                <path d="M46 18H54" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.55"/>
                            </svg>
                            <span data-text="Projetos">Projetos</span>
                        </h2>
                        <p>Uma coleção de ideias que saíram da cabeça, passaram pelo caos e viraram código.</p>
                    </div>

                    <div class="pixel-arrow">&gt;_</div>
                </a>

                <a href="https://glitchboundfunk.vercel.app/" target="_blank" class="pixelCard">
                    <div class="pixel-text">
                        <h2>
                            <svg class="icon icon-music" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34 14V42" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                                <path d="M34 14L50 10V18L34 22" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                <circle cx="26" cy="44" r="8" stroke="currentColor" stroke-width="4"/>
                            </svg>
                            <span data-text="Glitchbound Funk">Glitchbound Funk</span>
                        </h2>
                        <p>Um jogo de ritmo inspirado em Friday Night Funkin’, focado em gameplay, e funcionalidades.</p>
                    </div>

                    <div class="pixel-arrow">&gt;_</div>
                </a>

                <a href="https://neural-blocks.vercel.app" target="_blank" class="pixelCard">
                    <div class="pixel-text">
                        <h2>
                            <svg class="icon icon-neural" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 26L46 34L32 42L18 34L32 26Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                                <path d="M18 34V48L32 56L46 48V34" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                                <path d="M32 42V56" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>

                                <path d="M16 8L26 14L16 20L6 14L16 8Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
                                <path d="M48 8L58 14L48 20L38 14L48 8Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>

                                <path d="M22 20L27 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
                                <path d="M42 20L37 28" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
                                <path d="M18 34H8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>
                                <path d="M46 34H56" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>

                                <circle cx="8" cy="34" r="3" fill="currentColor"/>
                                <circle cx="56" cy="34" r="3" fill="currentColor"/>
                                <circle cx="16" cy="14" r="2" fill="currentColor"/>
                                <circle cx="48" cy="14" r="2" fill="currentColor"/>
                            </svg>
                            <span data-text="Neural Blocks">Neural Blocks</span>
                        </h2>
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