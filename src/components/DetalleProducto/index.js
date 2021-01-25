import React, { useState, useEffect } from 'react'
import './style.sass'
import Header from "../../components/header"
import CardProduct from '../cardProducto'
import { useParams } from 'react-router-dom'
import getProduct from '../../servicios/getProduct'
import getDescription from '../../servicios/getDescriptionProduct'
import { Helmet } from "react-helmet"

export default function DetalleProducto() {
    const params = useParams()
    const [productData, setProductData] = useState([])
    const [descriptionData, setDescriptionData] = useState([])

    useEffect(() => {
        getProduct({ idProduct: params.id })
            .then(product => {
                setProductData(product.data)
            })
    }, [])

    useEffect(() => {
        if (productData.length !== 0) {
            var descripcion = productData.descriptions[0].id
            var separar = descripcion.split('-')
            var contenido = separar[1]

            getDescription({ idProduct: params.id, idDescription: contenido })
                .then(descrip => {
                    setDescriptionData(descrip.data)
                })
        }
    }, [productData])

    return (
        <>
            {productData.length !== 0 &&
                <Helmet>
                    <title>{productData.title}</title>
                    <link rel="canonical" href={`https://www.mercadolibre.com.mx/${productData.id}`} />
                    <link rel="amphtml" href={`https://www.mercadolibre.com.mx/${productData.id}`} />
                    <meta name="Description" content={`${productData.title} Precio: $${productData.base_price}.00 M.N `} />
                </Helmet>
            }
            <Header />

            <div className="contenedorDetalle">
                <div className="contenedorProducto">
                    {productData.length !== 0 && <CardProduct
                        id={productData.id}
                        title={productData.title}
                        base_price={productData.base_price}
                        condition={productData.condition}
                        thumbnail={productData.pictures[0].url}
                        sold_quantity={productData.sold_quantity}
                        descripcion={descriptionData.plain_text}
                    />
                    }
                </div>
            </div>
        </>
    )
}