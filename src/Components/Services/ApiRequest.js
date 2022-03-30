import axios from "axios"
import React from "react"
import { BASE_URL } from "./Url"

export const pokedexList = (pokedex, setPokedex) => {
    axios.get(`${BASE_URL}`)
    .then((res) => {
        setPokedex(res.data)

    })
    .catch((erro) => {
        console.log(erro.message)
    })
}