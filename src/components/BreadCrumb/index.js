import React, { useState, useEffect } from 'react'
import './style.sass'

export default function Breadcrumb({ ...props }) {

    const { filtros } = props
    const [reverse, setReverse] = useState([])

    // verfica que exista el arreglo y lo ordena
    useEffect(() => {
        if (filtros) {
            setReverse(filtros.reverse())
        }
    }, [filtros])

    return (
        <div className="contenedorBreadcrumb">
            <ul>
                {filtros && reverse.map((item, index) => {

                    return <li key={index}> {index > 0 ? <>&gt;</> : null} {item.values[0].name}</li>

                })}
            </ul>
        </div>
    )
}