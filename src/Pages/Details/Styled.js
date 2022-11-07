import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #060b28;

`;

export const Card = styled.div`
    width: 350px;
    height: auto;
    margin: 10px;
    margin-top: 150px;
    background: rgba(6, 11, 40, 0.15);
    border-top: 1px solid rgb(36, 41, 63);
    border-right: 1px solid rgb(36, 41, 63);
    border-left: 1px solid rgb(36, 41, 63);
    padding-top: 80px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

img{
    width: 250px;
    margin-top: -250px;
    height: auto;
    opacity: 1;
    transition: all 0.2s ease 0s;
}
p{
    font-size: 20px;
    line-height: 135%;
    font-weight: lighter;
    text-transform: capitalize;
    text-align: center;
    display: block;
    margin: 5px 5px 5px;
    color: white;
 
}
.types{
    display: flex;
}
.types p{
    width: 80px;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
}
.status{
    display: flex;
}

button{
    width: calc(100% + 2px);
    height: 3rem;
    background: rgb(28, 216, 14);
    border-radius: 0px 0px 1.5rem 1.5rem;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    line-height: 150%;
    font-weight: 700;
    color: rgb(255, 255, 255);
}
.line{
    width: 50%;
    background-color: red;
    padding: 2px;
    margin: 10px;
}
.status-base{
    width: 300px;
    display: flex;
    flex-direction: column;
    color: red;
}
.status-base div{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.status-base p{
    margin: 10px;
    font-size: 15px;
}
`;