import React from "react";
import LogoOrkut from '../../img/orkut.png';
import './style.css';
import Search from '../../img/search.png';

function Home() {
    return (
        <>
        <header>
        <img src={LogoOrkut} className='logoOrkut' />

        <a>Início </a>
        <a>Perfil </a>
        <a>Recados </a>
        <a>Amigos </a>
        <a>Comunidades </a>
        <a>Aplicativos </a>

        <div className='input'>
            <img src={Search} />
            <input type="text" placeholder="Pesquisar no Orkut" />
        </div>

        </header>
        
        <body>
        <section className='information'>

        </section>

        <section className='profile'>
            
        </section>

        <section className='friends'>
            
        </section>

        </body>
        </>
    )
}

export default Home;