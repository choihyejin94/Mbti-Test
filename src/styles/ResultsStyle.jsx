import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 100px;
    padding: 40px;
`

export const LiStyle = styled.li`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    background-color: #f9f9f9; 
    border : 1px solid #ccc;
    border-radius : 8px;
    padding: 20px;
    gap: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
    margin: 20px;

    h2 {
    letter-spacing : 2px;
    }
`

export const ContentStyle = styled.p`
    letter-spacing: 0.5px;
    line-height: 1.3;
    margin: 20px;
`

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    gap: 20px;
`

export const PrivateBtn = styled.button`
    width: 200px;
    height: 40px;
    border: 1px solid blue;
    color: blue;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(0, 86, 179, 0.5);
    }
`

export const DeleteBtn = styled.button`
    width: 100px;
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
