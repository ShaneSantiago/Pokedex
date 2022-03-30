import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Filter from "../Filter/Filter"
import Header from "../Header/Header"
import Pokedex from "../Pokedex/Pokedex"

const Router = () => {
    return(
        <div>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path="/" element={<Pokedex />}>

            </Route>

        </Routes>
        </BrowserRouter>

        </div>
    )
}
export default Router