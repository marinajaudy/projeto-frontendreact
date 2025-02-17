import styled from "styled-components";

export const MainHeader = styled.header`
    /* border: 2px solid white; */
    background-color: black;
    height: 9vh;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 4px;
    gap: 10px;
    /* border: 2px solid yellow; */
    width: 80%;
`
export const ButtonLogo = styled.button`
    border: none;
    background-color: black;
    cursor: pointer;
`
export const ImagemLogo = styled.img`
    /* border: 2px solid red; */
    height: 7vh;
    width: 10vw;
    margin-left: 16px;
`
export const Buscador = styled.div`
/* border: 2px solid red; */

    input{
        width: 25vw;
    }
`
export const ButtonPesquisar = styled.button`
    border: none;
    border-radius: 1px;
    width: 4vw;
    height: 2.5vh;
    background-color: orange;
    cursor: pointer;
`
export const FilterCart = styled.div`
    /* border: 2px solid red; */
    display: flex;
    gap: 18px;
    align-items: center;
    margin-right: 16px;
`
export const MinimumMaximum = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const SelectOrder = styled.select`
    /* border: 2px solid red; */
    height: 3vh;
`
export const CartButton = styled.button`
    background-color: black;
    border: none;
`
export const ImagemCarrinho = styled.img`
    /* border: 2px solid red; */
    height: 5vh;
    position: relative;
    cursor: pointer;
`
export const CartQuantity = styled.div`
    /* border: 2px solid white; */
    background-color: white;
    position: absolute;
    top: 40px;
    color: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    width: 20px;
    height: 20px;
`