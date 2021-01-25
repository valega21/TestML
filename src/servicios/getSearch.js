import axios from 'axios'

export default async function getSearch({ textSearch } = {}) {
    const BASE_PATH = "https://api.mercadolibre.com"
 
    console.log(" search en servicio: ", textSearch)
    const apiURL = BASE_PATH + `/sites/MLA/search?q=${textSearch}`

    const config = {
        method: 'get',
        url: apiURL,
        timeout: 25000,
        withCredentials: false,
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    }

    return await axios(config)
        .then(res => {
            const {
                data,
                status
            } = res

            if (status === 200) {
                if (!Array.isArray(data)) {
                    return { data }
                }
                else {
                    console.log("ocurrio un error")
                }
            }
            return []
        })
}