import React from 'react'
import VersionSlider from "../Home/sliderPrincipal"
import Header from '../../components/header'
import './style.sass'
import { Helmet } from "react-helmet"

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Mercado Libre México - Donde comprar y vender de todo</title>
                <link rel="canonical" href="https://www.mercadolibre.com.mx/" />
                <meta name="Description" content="Donde comprar y vender todo." />
            </Helmet>

            <Header />

            <div className="contenedorHome">
                <VersionSlider />


                <section className="boxrebajas">
                    <div className="titleRebajas">REBAJAS EN MODA</div>
                    <div className="rebajas">
                        <div className="unoRebajas">
                            <img src="https://http2.mlstatic.com/D_NQ_NP_698499-MLA44576788041_012021-B.webp" alt="imagen1"></img>
                        </div>
                        <div className="dosRebajas">
                            <img src="https://http2.mlstatic.com/D_NQ_NP_895227-MLA44576788098_012021-F00.jpg-B.webp" alt="imagen2"></img>
                        </div>
                    </div>
                </section>

                <section className="iniciarElano">
                    <div className="titleIniciar">PARA INICIAR EL AÑO EN FORMA</div>
                    <div className="iniciar">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_834628-MLA44633097190_012021-OO.webp" alt="imagen3" />
                    </div>
                </section>
            </div>
        </>
    )
}