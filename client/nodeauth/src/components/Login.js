import React, {useState} from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components'

const Login = ()=>{
    const [message, setMessage] = useState("");
    return (
        <div>
            <H1>Login</H1>
            <LoginForm setMessage={setMessage}/>
            {message && <H1>{message}</H1>}
        </div>
    )
}

const H1 = styled.h1`
    color: white;
`;

export default Login