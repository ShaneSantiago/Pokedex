import React from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "./Styled"

const Header = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate(`/`)
    }
    return(
        <Container>
            <button onClick={goToHome}>Home</button>
        </Container>
    )
}
export default Header