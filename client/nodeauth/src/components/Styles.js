import styled from 'styled-components'

export const TheForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255,255,255,.65);
    width: 40%;
    margin: 5% auto;
    padding: 4% 0;

    &:hover{
        background: #f1f1f1;
    }
`;
export const Input = styled.input`
    width: 35%;
    padding: 1%;
    font-size: 1.2rem;
    margin: .5%;
    border-radius: 5px;
    border: 1px solid black;
`;

export const Button = styled.button`
    width: 10%;
    font-size: .8rem;
    padding: 1.5%;
    margin-top: 2%;
    background: dodgerblue;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
`;