import styled from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    background-color: #f9f9f9; 
    border : 1px solid #ccc;
    border-radius : 8px;
    padding: 30px;
    gap: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 400px;
`

export const LableStyle = styled.label`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: flex-start;
    width: 100%;
    font-size: 16px;
    color: #333;
`

export const InputStyle = styled.input`
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-top: 5px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        border-color: #ff4757;
        outline: none;
    }
`

export const BtnStyle = styled.button`
    width: 200px;
    height: 40px;
    border: 1px solid red;
    color: red;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(179, 0, 0, 0.5);
    }
`