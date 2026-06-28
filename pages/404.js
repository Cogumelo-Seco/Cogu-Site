import React, { useEffect } from 'react';
import Link from 'next/link'
import Head from "next/head"
import createGame from '../public/js/404/Game.js';
import createListener from '../public/js/404/Listener.js';
import renderGame from '../public/js/404/RenderGame/index.js';


function Err() {

    useEffect(() => {
        document.getElementById('gameButton').onclick = () => {
            const canvas = document.getElementById('gameCanvas')        
            const Listener = createListener();
            const game = createGame(Listener, canvas);
            document.getElementById('gameContent').style.display = 'block'
            document.getElementById('mobileButtonsContaner').style.display = 'block'

            game.loading({ Listener });
            Listener.state.game = game;

            renderGame(game, Listener);
        }
    })

    return (
        <main>
            <Head>
                <title>ERROR 404</title>

                <meta property="theme-color" content="#3f0064" />
                <meta property="og:title" content="Cogu_" />
                <meta property="og:site_name" content="Cogu Site" />
                <meta property="og:url" content="https://cogu.vercel.app/" />                
                <meta property="og:image" content="/Cogu-avatar/Default.png" />
                <meta property="og:description" content="Programador, criador de bots e projetos digitais com estética dark fantasy, glitch e roxo." />
            </Head>
            <head>
                <link rel="stylesheet" href="/css/_404/animations.css" />
                <link rel="stylesheet" href="/css/_404/404.css" />
                <link rel="stylesheet" href="/css/_404/game.css" />
                <link rel="stylesheet" href="/css/_404/resize.css" />
            </head>

            <section class="error-card" id="error-card">
                <div class="magic-symbol">⌬</div>

                <h1 class="glitch" data-text="404_">404_</h1>
                <h2>Página perdida no glitch</h2>

                <p>
                    Esse caminho caiu no void. O código tentou compilar,
                    mas a realidade quebrou.
                </p>

                <pre class="terminal">ERROR: route_not_found
                    signal: broken
                    status: lost_in_void
                </pre>

                <div class="buttons">
                    <a href="/" class="btn">&gt;_ Voltar ao início</a>
                    <a id="gameButton" class="btn secondary">&gt;_ Game</a>
                </div>
            </section>
            
            <div id="gameContent">
                <div id="gameHUD">
                    <span id="playerScore">POINTS 100</span>
                </div>
                <canvas id="gameCanvas" />
            </div>

            <div id="mobileButtonsContaner">
                <button className="mobileButtons" id="mobileButtonUp" />
                <div className="mobileButtonsSeparator" />
                <button className="mobileButtons" id="mobileButtonLeft" />
                <button className="mobileButtons" id="mobileButtonDown" />
                <button className="mobileButtons" id="mobileButtonRight" />
            </div>
        </main>
    )
}

export default Err;