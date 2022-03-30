import React, { useEffect, useState } from "react"
import { pokedexList } from "../Services/ApiRequest"
import PokedexCard from "./PokedexCard"
import useForm from "../Hooks/UseForm"
import { ContainerList} from "./styled"
import Filter from "../Filter/Filter"

const Pokedex = (props) => {

    const [pokedex, setPokedex] = useState([])
    const [form, onChange, clear] = useForm({
        name: "",
        typePokemon: "",
        sorting: "register",
        order: "1"
    })

    useEffect(() => {
        pokedexList(pokedex, setPokedex)
    }, [])

    return(
        
        <div>
            
            <Filter 
            form={form} onChange={onChange}
            />   

        <ContainerList>
            {pokedex && pokedex.results && pokedex.results
            .filter(poke => {
                return poke.name.toLowerCase().includes(form.name.toLowerCase()) ||
                poke.national_number.includes(form.name)
            })
            .filter(poke => {
                return poke.type[0].includes(form.typePokemon)
            })
            .sort((a, b) => {
                switch (form.sorting) {
                    case "name":
                        return form.order * a.name.localeCompare(b.name)
                    case "register":
                        return form.order
                    default:
                        // return form.order - (a.register - b.register)
                }
                
            })
        
            .map((pokemon) => {
                return <div><PokedexCard pokemon={pokemon}/>
                
                </div>
            
            })}
    
            </ContainerList>
            </div>
    )
}
export default Pokedex