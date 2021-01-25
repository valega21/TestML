import React from 'react'
import Search from '../search'
import './style.sass'

export default function Header() {
    const url_portal = "/"
    const titulo_portal = "Mercado Libre México - Donde comprar y vender de todo"

    return (
        <>
            <header>
                <div className="header_superior">
                    <div className="container">
                        <a href={url_portal} title={titulo_portal} className="header_logo" aria-label="logoML">
                            <img src="/img/Logo_ML.png" alt="logoML"></img>
                        </a>

                        <Search />
                    </div>
                </div>
            </header>
        </>
    )
}