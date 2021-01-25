import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.sass'

export default function Search() {

    const [typeSearch, setTypeSearch] = useState("")
    const history = useHistory()
    const url = history.location.pathname

    // asignar valor al input
    const SearchChange = evt => {
        setTypeSearch(evt.target.value)
    }

    // activa funcion buscar
    const SearchText = evt => {
        if (typeSearch.length > 2 && url !== '/') {
            history.push(`/items-search=${typeSearch}`)
        }
        if (typeSearch.length > 2 && url === '/') {
            history.push(`items-search=${typeSearch}`)
        }
    }

    return (
        <form onSubmit={SearchText} className="search">
            <label className="line">
                <input type="search"
                    value={typeSearch} className="input"
                    onChange={SearchChange}
                    name="search" placeholder="Nunca dejes de buscar" aria-label="Campo de búsqueda" autoComplete="off"
                    id="inputBusqueda"
                />

                <button className="btn rojo button"></button>
            </label>
        </form>
    )
}