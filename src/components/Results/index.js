import React, { useState, useEffect } from 'react'
import './style.sass'
import Header from "../../components/header"
import getSearch from "../../servicios/getSearch"
import { useParams } from 'react-router-dom'
import CardResult from '../cardResult'
import Breadcrumb from '../BreadCrumb'
import { Helmet } from "react-helmet"

export default function Results() {
    const params = useParams()
    const [resultsData, setResultsData] = useState([])

    // obtiene informacion desde el servicio
    useEffect(() => {
        getSearch({ textSearch: params.textSearch })
            .then(text => {
                setResultsData(text.data)
            })
    }, [])

    return (
        <>
            <Helmet>
                <title>{`Encuentra ${params.textSearch} | MercadoLibre.com`}</title>
                <link rel="canonical" href={`https://www.mercadolibre.com.mx`} />
                <meta name="Description" content={` Si lo que buscas es ${params.textSearch}, consíguelo en MercadoLibre.com `} />
            </Helmet >

            <Header />
            <Breadcrumb filtros={resultsData.filters} />

            <div className="contenedorResult">
                <div className="boxResult">
                    {resultsData.length !== 0 && resultsData.results.map((item, index) => index <= 3 &&
                        < CardResult id={item.id} title={item.title} price={item.price} key={index} shipping={item.shipping}
                            seller_address={item.seller_address} thumbnail={item.thumbnail} />
                    )}
                </div>
            </div>
        </>
    )
}