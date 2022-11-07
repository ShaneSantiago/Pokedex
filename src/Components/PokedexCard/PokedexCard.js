import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import DetailsModal from "../DetailModal/DetailsModal";
import { pokemonsType } from "../PokemonsType/PokemonsType";
import { Card, Container } from "./Styled"

const PokedexCard = (props) => {

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.poke.id}.png`;
    const imgTeste = `https://pokeapi.co/api/v2/pokemon-species/1/`

    const navigate = useNavigate()

    const goToDetails = (name) => {
        navigate(`/details/${name}`)
    }

    
    return(
        <Container>
        <Card>
            <div className="teste">
                <img src={imgUrl} />
            </div>
            <p>#00{props.poke.order}</p>
            <p>{props.poke.name}</p>
            <div className="types">
            {props.poke.types?.map((type) => {
                    return <div>
                        <p  style={{backgroundColor: pokemonsType(type.type.name)}}>{type.type.name}</p>
                        
                    </div>
                })}
            </div>
            <div className="status">
                <div>
                    <p>{props.poke.weight / 10}</p>
                    <p>Altura</p>
                </div>
                <div>
                    <p>{props.poke.height / 10} kg</p>
                    <p>Peso</p>
                </div>
            </div>
            <button onClick={() => goToDetails(props.poke.name)}>Mais detalhes</button>
        </Card>
        </Container>
    )
}
export default PokedexCard