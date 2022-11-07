import React, { useContext, useState } from "react"
import GlobalStateContext from "../../Components/GlobalContext/GlobalContextState"
import { ContainerInput } from "./Styled"

const Template = (props) => {

    const {pokemons} = useContext(GlobalStateContext)


    return(
        <ContainerInput>
        <div className="container-template">
        <img src={"../logo.png"}/>
            <div className="input">
            <input 
            name="name"
            type="name"
            value={props.form.name}
            onChange={props.onChange}
            placeholder="Nome do Pokemon"
            />
            <input 
            name="type"
            type="name"
            value={props.form.type}
            onChange={props.onChange}
            placeholder="Tipo do Pokemon"
            />
        </div>
        </div>
        </ContainerInput>
    )
}
export default Template