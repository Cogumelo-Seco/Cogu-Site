import Router from 'next/router'
import Head from 'next/head';
import NProgress from 'nprogress';
import Link from 'next/link';
import { CookiesProvider } from "react-cookie";
Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function langButtonClick() {
    const selectLangBox = document.getElementById('selectLangBox')

    if (selectLangBox.style.display == 'flex') {
        selectLangBox.style.display = 'none'
    } else {
        selectLangBox.style.display = 'flex'
    }
}

function openCloseMobileHeader(open) {
    if (open) {
        document.getElementById('mobile-header').style.display = 'inline-block'
        document.getElementById('ofuscation').style.display = 'inline-block'
    } else {
        document.getElementById('mobile-header').style.display = 'none'
        document.getElementById('ofuscation').style.display = 'none'
    }
}

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/imgs/Cogu-avatar/Default.png" />
                <link rel="mask-icon" href="/imgs/Cogu-avatar/Default.png" color="#905bd5" />
            </Head>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                
                <link rel="stylesheet" href="/css/colors.css" />
                <link rel="stylesheet" href="/css/fonts.css" />
                <link rel="stylesheet" href="/css/reset.css" />

                <link rel="stylesheet" type="text/css" href="/css/nprogress.css" />
                <link rel="stylesheet" href="/css/globalAnimations.css" />
                <link rel="stylesheet" href="/css/global.css" />

                <link rel="stylesheet" href="/css/_header/animations.css" />
                <link rel="stylesheet" href="/css/_header/header.css" />
                <link rel="stylesheet" href="/css/_header/resizable.css" />

                <link rel="stylesheet" href="/css/_footer/footer.css" />
            </head>
            <nav>
                <style jsx>{`
                    a {
                        margin: 0 10px 0 0;
                    }
                `}</style>
            </nav>

            <div id="zoom" className="zoom" onClick={(e) => e.target.id == 'zoom' ? e.target.classList.toggle('open') : null}>
                <div id="zoomContent">
                    <img id="zoomImage" src="http://localhost:3000/imgs/avatar/Default.png" />
                    <a id="openOriginal" target="_blank">{pageProps.language == 'pt' || pageProps.language == 'es' ? 'Abrir Original' : 'Open original'}</a>
                </div>
            </div>
            
            <div class="background"></div>

            <header>
                <div className="headerBox">
                    <a href="/" className="logo">
                        <div className="logo-text" data-text="Cogu">Cogu<span>_</span></div>
                    </a>

                    <div className="nav-links">
                        <a href="/" className="navlink active">Início</a>
                        <a href="/projects" className="navlink">Projetos</a>
                    </div>
                </div>
            </header>

            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>

            <footer onClick={() => open('https://github.com/Cogumelo-Seco')}>
                <span className="line"></span>
                
                <span class="footer-cursor">&gt;_</span>
                <span class="footer-glitch">USER: COGU</span>
                <span>|</span>
                <span>MODE: CREATOR</span>
                <span>|</span>
                <span class="footer-status">STATUS: ONLINE</span>
            </footer>
        </>
    )
}

export default App