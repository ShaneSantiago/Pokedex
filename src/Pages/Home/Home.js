import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import GlobalStateContext from "../../Components/GlobalContext/GlobalContextState"
import useForm from "../../Components/Hooks/Hooks"
import PokedexCard from "../../Components/PokedexCard/PokedexCard"
import { Container, ContainerHome } from "./Styled"
import Template from "./Template"

const Home = () => {
    const [form, onChange, clear] = useForm({
        name: "",
        type: "",
        sorting: "",
        order: "1"
    })
    const {pokemons, loading} = useContext(GlobalStateContext)


    return(
        <ContainerHome>
        <div className="layout">
        <Template form={form} onChange={onChange}/>
        </div>
        <Container>
            {loading? <h2>Carregando</h2> : <>
            {pokemons && pokemons?.filter(poke => {
                return poke.name.toLowerCase().includes(form.name.toLowerCase())
            })
            .filter(poke => {
                return poke.types[0].type.name.includes(form.type)
            })
            
            .map((poke) => {
                return <PokedexCard poke={poke}/>
            })}
            </>}
        </Container>
        </ContainerHome>
    )
}
export default Home