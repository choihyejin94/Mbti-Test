import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 100px;
`

export const HeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px; 
`

export const BoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px; 
`

export const BoxStyle = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

export const BtnStyle = styled.button`
    border: none;
    border-radius: 8px;
    border: 1px solid red;
    color: red;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(179, 0, 0, 0.518);
    }
`