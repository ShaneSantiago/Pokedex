import styled from "styled-components"

export const ContainerHome = styled.div`
    width: 100%;
    flex0direction: column;
.layout{
    width: 100%;
    display: flex;
    height: 380px;
    background-color: red;
    flex-direction: column;
.container-template{
    width: 100%;
    margi: 0 auto;
}
.input{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
input{
    width: 300px;
    padding: 10px;
    border: none;
    margin: 20px;
}
@media(max-width: 950px){
    width: 100%;
}
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #060b28;
h2{
    color: white;
}

`;

export const ContainerInput = styled.div`
    width: 100%;
.container-template{
    width: 100%;
    display: flex;
}
input{
    display: flex;
    justify-content: space-around;
    border-radius: 20px;
}
img{
    width: 500px;
}
@media(max-width: 950px){
.container-template{
    width: 300px;
    display: flex;
    flex-direction: column;
}
img{
    width: 380px;
}
.input{
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
}
`;