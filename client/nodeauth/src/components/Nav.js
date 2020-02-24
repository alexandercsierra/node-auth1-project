import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Nav = ()=>{
    return (
        <NavBar>
            <Links to="/" exact={true}>Home</Links>
            <Links to="/login">Login</Links>
            <Links to="/signup">Signup</Links>
            <Links to="/users">Users</Links>
        </NavBar>
    )
}

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #f1f1f1;
    padding: 1% 0;
`;
const Links = styled(NavLink)`
    padding: 0 2%;
    font-size: 1rem;
    color: #423222;
    font-weight: 800;
    text-decoration: none;

    &:hover{
        color: dodgerblue;
    }
`;

export default Nav