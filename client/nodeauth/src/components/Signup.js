import React, {useState} from 'react'
import Form from './Form'
import styled from 'styled-components'

const Signup = ()=>{
    const [message, setMessage] = useState("");
    return (
        <div>
            <H1>Sign Up</H1>
            <Form setMessage={setMessage}/>
            {message && <H1>{message}</H1>}
        </div>
    )
}

const H1 = styled.h1`
    color: white;
`;

export default Signup