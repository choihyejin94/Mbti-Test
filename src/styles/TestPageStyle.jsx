import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    margin-top: 100px;
    padding: 20px;
`

export const FormStyle = styled.form`
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
    max-width: 600px;
    margin: 20px 0;

    h1 {
    text-align: center;
    color: #333;
    }

    h2 {
    margin: 15px 0;
    color: #555;
    }

    button {
    width: 100px;
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
    }
`

export const QuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    width: 350px;
`;

export const RadioStyle = styled.input`
    margin-right: 10px;
    accent-color: #007bff;
    transition: border-color 0.3s;
`