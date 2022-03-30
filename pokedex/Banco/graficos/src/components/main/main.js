import React from "react"
import GoogleCharts from "./charts"
import { Container, ContainerCharts, StyledBox } from "./styled"

const Main = () => {
    return(
        <Container>
            <StyledBox>
            <div className="colorStyled">
            <h2>Servidores</h2>
                <p>Total: 200/500</p>
                </div>

                <div className="colorStyled2">
                <h2>Banco</h2>
                <p>Total: 200/500</p>
                </div>

                <div className="colorStyled3">
                <h2>Sites</h2>
                <p>Total: 200/500</p>
                </div>

                <div className="colorStyled4">
                <h2>Database</h2>
                <p>Total: 200/500</p>
                </div>
                
            </StyledBox>
            <ContainerCharts>
            <GoogleCharts />
            </ContainerCharts>
        </Container>
    )
}
export default Main