import react, { useEffect, useState } from "react"
import { BASE_URL } from "../Services/Url"
import GlobalStateContext from "./GlobalContextState"
import axios from "axios"

const GlobalState = (props) => {
    const [pokemonsNames, setPokemonsNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        allPokemon(setLoading)
    }, [])

    useEffect(() => {
        const newList = []
        setLoading(true)
        pokemonsNames.forEach((item) => {
            axios.get(item.url)
            .then((res) => {
                newList.push(res.data)
                if(newList.length === 121){
                    const orderList = newList.sort((a, b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderList)
                    setLoading(false)
                }
            })
            .catch((erro) => {

            })
        })
    }, [pokemonsNames])


    const allPokemon = () => {
        setLoading(true)
        axios.get(`${BASE_URL}`)
        .then((res) => {
            setPokemonsNames(res.data.results)
            setLoading(false)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex, loading, setLoading}
    
    return(
      <GlobalStateContext.Provider value={data}>
          {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState