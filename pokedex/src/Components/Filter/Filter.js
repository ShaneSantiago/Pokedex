import React, { useState } from "react"
import { InputFilter } from "./styled"


const Filter = (props) => {
    
    return(
        
            <InputFilter>
            <input 
                type={"name"}
                name={"name"}
                value={props.form.name}
                onChange={props.onChange}
                placeholder={"Nome do Pokemon"}
                />

                <input 
                type={"name"}
                name={"typePokemon"}
                value={props.form.typePokemon}
                onChange={props.onChange}
                placeholder={"Tipo po Pokemon"}
                />


                <input 
                type={"name"}
                name={"typePokemon"}
                value={props.form.typePokemon}
                onChange={props.onChange}
                placeholder={"Tipo po Pokemon"}
                />

               <div>
               <select name="sorting" value={props.form.sorting} onChange={props.onChange}>
                   <option value="name">Nome</option>
                   <option value="register">Registro Nacional</option>
               </select>

               <select name="order" value={props.form.order} onChange={props.onChange}>
                   
                   <option value={1}>Ordem Crescente</option>
                   <option value={-1}>Ordem Decrescente</option>
               </select>
               </div>
            
               </InputFilter>
        
    )   
}
export default Filter