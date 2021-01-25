import React from 'react'
import './style.sass'
import CurrencyFormat from "react-currency-format"

export default function CardProduct({ ...props }) {

    const {
        title,
        condition,
        sold_quantity,
        base_price,
        thumbnail,
        descripcion
    } = props

    return (
        <article className="cardProduct">
            <div className="superior">
                <div className="sectionLeft">
                    <img loading="lazy" src={thumbnail} alt={title} />
                </div>

                <div className="sectionRight">
                    <p>{condition === 'new' ? "Nuevo" : "Usado"} - {sold_quantity} vendidos</p>
                    <h2>{title}</h2>

                    <CurrencyFormat
                        value={base_price}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={value => <p className="precio1">$ {value} </p>}
                    />

                    <button className="btnComprar">Comprar ahora</button>
                </div>
            </div>



            <div className="inferior">
                <h2>Descripción del Producto</h2>
                <p>{descripcion}</p>
            </div>
        </article>
    )

}