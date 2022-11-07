import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import GlobalStateContext from "../../Components/GlobalContext/GlobalContextState"
import { pokemonsType } from "../../Components/PokemonsType/PokemonsType"
import { Card, Container } from "./Styled"


const DetailsPokemon = (props) => {
    const [selectedPokemon, setSelectedPokemon] = useState([])
    const {pokemons} = useContext(GlobalStateContext)
    
    const {name} = useParams()

    
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${selectedPokemon.id}.png`;

    useEffect(() => {
        const currentPokemon = pokemons.find((item) => {
            return item.name === name
        })
        setSelectedPokemon(currentPokemon)
    }, [])
    return(
        <Container>
            <Card>
            <div className="teste">
            <img src={imgUrl}/>
            </div>
            <p>#00{selectedPokemon.order}</p>
            <p>{selectedPokemon.name}</p>
            <div className="types">
            {selectedPokemon.types?.map((type) => {
                    return <div>
                        <p  style={{backgroundColor: pokemonsType(type.type.name)}}>{type.type.name}</p>  
                    </div>
                })}
            <div className="status">
                <div>
                    <p>{selectedPokemon.weight / 10}</p>
                    <p>Altura</p>
                </div>
                <div>
                    <p>{selectedPokemon.height / 10} kg</p>
                    <p>Peso</p>
                </div>
            </div>
            </div>
            <div className="line"></div>
            <div className="status-base">
                {selectedPokemon.stats?.map((status) => {
                    return <div>
                        <p>{status.stat.name}</p>
                        <p>{status.base_stat} / 100</p>
                    </div>
                })}
            </div>
        </Card>
        </Container>
    )
}
export default DetailsPokemon