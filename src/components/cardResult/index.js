import React from 'react'
import './style.sass'
import { Link } from "react-router-dom"
import CurrencyFormat from "react-currency-format"

export default function CardResult({ ...props }) {

    const {
        id,
        title,
        shipping,
        price,
        thumbnail,
        seller_address
    } = props

    const url = "/items/"
    return (
        <>
            <Link to={url + id} className="enlaceResult">

                <article className="cardResult">

                    <div className="sectionLeft">
                        <img loading="lazy" src={thumbnail} alt={title} />
                    </div>

                    <div className="sectionRight">
                        <div className="boxPrice">
                            <CurrencyFormat
                                value={price}
                                displayType={'text'}
                                thousandSeparator={true}
                                renderText={value => <p className="precio1">$ {value} </p>}
                            />
                            {shipping.free_shipping && <img src="/../img/ic_shipping.png" alt="shipping-free" />}
                        </div>

                        <div className="ubicacion">
                            <p>{seller_address.state.name}</p>
                        </div>

                        <div className="boxTitle">
                            <h2 className="title">{title}</h2>
                        </div>


                    </div>

                </article>
            </Link>
            <div className="border"></div>
        </>
    )

}