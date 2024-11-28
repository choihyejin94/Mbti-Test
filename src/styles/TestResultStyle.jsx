import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 120px;
    padding: 20px;

    button {
    width: 300px;
    height: 40px;
    border: 1px solid blue;
    color: blue;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 15px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 4px 15px rgba(0, 86, 179, 0.5);
    }
}
`

export const MbtiWrapper = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items: center;
    background-color: #f9f9f9; 
    border : 1px solid #ccc;
    border-radius : 8px;
    margin: 30px;
    padding: 30px;
    gap: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 1000px;

    p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
    font-size: 18px;
    letter-spacing: 0.5px;
    line-height: 1.3;
    color: #444;
    }
`