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
                <title>Cogu Projects</title>

                <meta property="theme-color" content="#3f0064" />
                <meta property="og:title" content="Cogu_" />
                <meta property="og:site_name" content="Cogu Site" />
                <meta property="og:url" content="https://cogu.vercel.app/" />                
                <meta property="og:image" content="/Cogu-avatar/Default.png" />
                <meta property="og:description" content="Programador, criador de bots e projetos digitais com estética dark fantasy, glitch e roxo." />
            </Head>
            <head>
                <link rel="stylesheet" href="/css/projects/animations.css" />
                <link rel="stylesheet" href="/css/projects/projects.css" />
                <link rel="stylesheet" href="/css/projects/resize.css" />
            </head>

            <section class="hero">
                <h1 class="glitch-title" data-text="PROJETOS">PROJETOS</h1>
                <p class="subtitle">Ideias quebradas pelo caos, corrompidas por bugs e revividas em código..</p>

                <div class="tags">
                    <span>Dev</span>
                    <span>Bots</span>
                    <span>Games</span>
                    <span>IA</span>
                    <span>Glitch</span>
                    <span>Bugs</span>
                </div>
            </section>

            <section class="projects-grid">
                <a class="project-card" target="_blank" href="https://discord.gg/33Zsrg5dTc">
                    <div class="project-content">
                        <h2>
                            <svg viewBox="0 0 100 100">
                                <path d="M8 50s16-26 42-26 42 26 42 26-16 26-42 26S8 50 8 50z" />
                                <circle cx="50" cy="50" r="12" />
                                <path d="M50 29v42" />
                                <path d="M43 50h14" />
                                <path d="M22 50h-8m72 0h-8" />
                            </svg>
                            <span data-text="Alis">Alis</span>
                        </h2>
                        <p>IA criada por Cogu, uma IA configurada e programada para ajudar o Cogu em seus projetos.</p>
                    </div>
                </a>

                <a class="project-card" target="_blank" href="https://glitchboundfunk.vercel.app/">
                    <div class="project-content">
                        <h2>
                            <svg viewBox="0 0 100 100">
                                <path d="M58 18v45" />
                                <path d="M58 18l28-8v17l-28 8" />
                                <ellipse cx="45" cy="66" rx="13" ry="9" transform="rotate(-18 45 66)" />
                                <path d="M19 72l-9-9 9-9" />
                                <path d="M81 54l9 9-9 9" />
                                <path d="M38 83V49m0 0l-8 8m8-8l8 8" />
                            </svg>
                            <span data-text="Glitchbound Funk">Glitchbound Funk</span>
                        </h2>
                        <p>Jogo de ritmo inspirado em Friday Night Funkin’, com identidade própria.</p>
                    </div>
                </a>

                <a class="project-card" target="_blank" href="https://neural-blocks.vercel.app">
                    <div class="project-content">
                        <h2>
                            <svg viewBox="0 0 100 100">
                                <path d="M50 18l16 9v18l-16 9-16-9V27z" />
                                <path d="M34 27l16 9 16-9" />
                                <path d="M50 36v18" />
                                <path d="M24 68l14 8v16l-14 8-14-8V76z" transform="translate(0 -10)" />
                                <path d="M76 68l14 8v16l-14 8-14-8V76z" transform="translate(0 -10)" />
                                <path d="M50 54v15M50 69l-26 10M50 69l26 10" />
                                <circle cx="50" cy="69" r="3" />
                            </svg>
                            <span data-text="Neural Blocks">Neural Blocks</span>
                        </h2>
                        <p>Rede neural evolutiva onde blocos aprendem a sobreviver.</p>
                    </div>
                </a>

                <a class="project-card" href="/404">
                    <div class="project-content">
                        <h2>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">  
                                <rect x="8" y="8" width="48" height="48" rx="10" stroke-width="3" opacity="0.35" />
                                <path d="M20 8V56M32 8V56M44 8V56M8 20H56M8 32H56M8 44H56" stroke-width="1.5" opacity="0.14" />
                                <path d="M20 44H32C38.6274 44 44 38.6274 44 32V26" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="38" y="14"width="12" height="12" rx="4"/>
                                <circle cx="46" cy="18" r="1.4" fill="white" opacity="0.9" />
                                <rect x="14" y="38" width="12" height="12" rx="3" opacity="0.75" />
                                <circle cx="22" cy="22" r="4" opacity="0.9" />
                                <rect x="48" y="48" width="3" height="3" rx="1" opacity="0.45" />
                            </svg>
                            <span data-text="Snake 404">Snake 404</span>
                        </h2>
                        <p>É o jogo da Snake que tem na página de erro 404 desse site, criado em JavaScript :)</p>
                    </div>
                </a>

                <a class="project-card" target="_blank" href="https://github.com/Cogumelo-Seco/Game-Snake-in-C">
                    <div class="project-content">
                        <h2>
                            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">  
                                <rect x="8" y="8" width="48" height="48" rx="10" stroke-width="3" opacity="0.35" />
                                <path d="M20 8V56M32 8V56M44 8V56M8 20H56M8 32H56M8 44H56" stroke-width="1.5" opacity="0.14" />
                                <path d="M20 44H32C38.6274 44 44 38.6274 44 32V26" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="38" y="14"width="12" height="12" rx="4"/>
                                <circle cx="46" cy="18" r="1.4" fill="white" opacity="0.9" />
                                <rect x="14" y="38" width="12" height="12" rx="3" opacity="0.75" />
                                <circle cx="22" cy="22" r="4" opacity="0.9" />
                                <rect x="48" y="48" width="3" height="3" rx="1" opacity="0.45" />
                            </svg>
                            <span data-text="Snake in C">Snake in C</span>
                        </h2>
                        <p>É o jogo da Snake feito puramante em C, a renderização é no console por meio de caracteres.</p>
                    </div>
                </a>
                
                <a class="project-card" target="_blank" href="https://discord.com/oauth2/authorize?client_id=780550639893610506&permissions=8&scope=applications.commands%20bot">
                    <div class="project-content">
                        <h2>
                            <svg viewBox="0 0 100 100">
                                <rect x="19" y="30" width="62" height="44" rx="8" />
                                <rect x="30" y="42" width="40" height="22" rx="5" />
                                <path d="M40 53h-8m36 0h-8" />
                                <path d="M45 53c3 4 7 4 10 0" />
                                <path d="M50 30V18" />
                                <circle cx="50" cy="15" r="5" />
                                <path d="M19 50h-8m78 0h-8" />
                            </svg>
                            <span data-text="CoguBot Music">CoguBot Music</span>
                        </h2>
                        <p>Bot de Discord criado para tocar músicas de diversos lugares em canais de voz do Discord</p>
                    </div>
                </a>

                <a class="project-card" target="_blank" href="https://cogu-projects.vercel.app/pac-man">
                    <div class="project-content">
                        <h2>
                            <svg viewBox="0 0 70 70">
                                <path d="M12 48C18 40 24 40 30 32C36 24 43 24 52 16"/>
                                <circle cx="12" cy="48" r="2.5" opacity="0.85" />
                                <circle cx="30" cy="32" r="2.5" opacity="0.85" />
                                <circle cx="52" cy="16" r="2.5" opacity="0.85" />
                                <path d="M25.5 18C16.94 18 10 24.94 10 33.5S16.94 49 25.5 49C31.2 49 36.18 45.92 38.86 41.34L25.5 33.5L38.86 25.66C36.18 21.08 31.2 18 25.5 18Z" stroke-width="3" stroke-linejoin="round" />
                                <circle cx="25" cy="25.5" r="2" />
                                <path d="M45 28C45 22.48 49.48 18 55 18C60.52 18 65 22.48 65 28V45L61.5 41.8L58 45L54.5 41.8L51 45L47.5 41.8L44 45V28Z" transform="translate(-7 1)" stroke-width="3" stroke-linejoin="round"  />
                                <circle cx="46" cy="29" r="1.8" />
                                <circle cx="55" cy="29" r="1.8" />
                                <path d="M47 10H56M56 10V19" stroke-width="2" stroke-linecap="round" opacity="0.8" />
                            </svg>
                            <span data-text="Pac-Man">Pac-Man</span>
                        </h2>
                        <p>Uma recriação prória do jogo do Pac-Man, com sistema de busca caminhos e inteligência nos fantasmas.</p>
                    </div>
                </a>

                <a class="project-card" target="_blank" href="https://infinite-run.vercel.app/">
                    <div class="project-content">
                        <h2>
                            <svg viewBox="0 0 100 100">
                                <rect x="16" y="18" width="68" height="56" rx="4" />
                                <path d="M16 32h68" />
                                <path d="M30 48l10 9-10 9" />
                                <path d="M47 66h18" />
                            </svg>
                            <span data-text="Infinite Run">Infinite Run</span>
                        </h2>
                        <p>Um jogo 3D no navegador. A recriação do primeiro jogo criado pelo Cogu, mas essa roda no navegador e tem muito mais sistemas.</p>
                    </div>
                </a>

                <a class="project-card" target="_blank" href="https://cogu-fogo-do-doom.vercel.app/">
                    <div class="project-content">
                        <h2>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M12 22C8.25 22 5 19.35 5 15.4C5 12.45 6.7 10.45 8.35 8.75C9.8 7.25 11.15 5.95 10.75 3C13.95 4.15 16.2 6.8 16.45 10.25C17.35 9.55 18.05 8.55 18.35 7.35C20.15 9.05 21 11.35 21 14.05C21 18.65 17.15 22 12 22Z" stroke-width="1.7" stroke-linejoin="round"/>
                                <path d="M12.1 18.9C10.15 18.9 8.75 17.55 8.75 15.8C8.75 14.45 9.55 13.45 10.4 12.65C11.2 11.9 11.85 11.05 11.75 9.75C13.85 10.85 15.25 12.55 15.25 15.05C15.25 17.2 13.9 18.9 12.1 18.9Z" stroke-width="1.5" stroke-linejoin="round"/>
                                <path d="M7 16H5.5M18.5 16H17M9 20L8 21M15 20L16 21" stroke-width="1.3" stroke-linecap="round"/>
                            </svg>
                            <span data-text="Fogo do DOOM">Fogo do DOOM</span>
                        </h2>
                        <p>Renderização do sistema de fogo do DOOM em JavaScript+Canvas.</p>
                    </div>
                </a>

                
                <a class="project-card" target="_blank" href="https://cogu-projects.vercel.app/minesweeper">
                    <div class="project-content">
                        <h2>
                            <svg class="project-icon" viewBox="0 0 64 64" fill="none">
                                <rect x="10" y="10" width="44" height="44" rx="8" stroke-width="3" opacity="0.9"/>
                                <path d="M24 10V54M40 10V54M10 24H54M10 40H54" stroke-width="2" opacity="0.28"/>
                                <circle cx="32" cy="32" r="6" opacity="0.9"/>
                                <path d="M32 21V17M32 47V43M21 32H17M47 32H43M24.2 24.2L21.4 21.4M42.6 42.6L39.8 39.8M39.8 24.2L42.6 21.4M21.4 42.6L24.2 39.8" stroke-width="2.5" stroke-linecap="round" opacity="0.85"/>
                                <circle cx="29.5" cy="29" r="1.4" fill="white" opacity="0.65"/>
                                <path d="M44 16V29" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M44 17L52 20.5L44 24V17Z" opacity="0.85"/>
                                <path d="M17.5 35.5H21.5M19.5 35.5V28.5L17.8 29.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
                                <path d="M43 48H49C49 45.8 43.5 45.8 43.5 42.8C43.5 41.4 44.7 40.5 46.4 40.5C47.3 40.5 48.2 40.8 49 41.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
                            </svg>
                            <span data-text="Campo Minado">Campo Minado</span>
                        </h2>
                        <p>Uma recriação do Campo Minado, não foi muito atualizado, mas foi criado especialmente para teste de buscadores de caminho.</p>
                    </div>
                </a>
            </section>
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