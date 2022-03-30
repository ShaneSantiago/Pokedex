import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import { PokemonContainer } from "./styled"
import styled from "styled-components"


const Button = styled.button`
    --size: 10px;
    width: var(--size);
    height: var(--size);
    font-size: 30px;
    border: 0;
    padding: 0;
    outline: 0;
    cursor: pointer;
    background-color: #fff;
    align-items: center;
    border-radius: 100%;
`;

const PokedexCard = (props) => {
    const [isLiked, setLikeState] = useState(false)

    return(
        
        <PokemonContainer>
            <spam>{props.pokemon.national_number} <Button onClick={() => {setLikeState(!isLiked)}}>{isLiked ? "❤️" : "🤍"}</Button></spam>
            <h2>{props.pokemon.name}</h2>
            <img src={props.pokemon.sprites && props.pokemon.sprites.large}/>
            <h5>Tipo: </h5>
            <p>{props.pokemon.type[0]} - {props.pokemon.type[1]}</p>
             
        </PokemonContainer>
    )
}
export default PokedexCard