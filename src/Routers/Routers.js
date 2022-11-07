import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailsModal from "../Components/DetailModal/DetailsModal"
import Header from "../Components/Header/Header"
import DetailsPokemon from "../Pages/Details/Details"
import Home from "../Pages/Home/Home"


const Routers = () => {
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>

                <Route exact path="/details/:name" element={<DetailsPokemon />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers