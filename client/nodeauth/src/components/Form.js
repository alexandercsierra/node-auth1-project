import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {TheForm, Input, Button} from './Styles'

const Form = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/register', user)
            .then(res=>{
                props.setMessage('Signed up!')
                setUser({
                    username: '',
                    password: ''
                })
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <TheForm onSubmit={onSubmit}>
                <Input placeholder='username' name='username' onChange={handleChange} value={user.username} autoComplete="off"/>
                <Input placeholder='password' name='password' onChange={handleChange} value={user.password} autoComplete="off"/>
                <Button>Signup</Button>
            </TheForm>
        </div>
    )
}



export default Form