import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('http:localhost:5000/api/users')
            .then(res=>console.log('users', res))
            .catch(err=>console.log(err.message))
    },[users])
    return(
        <div>
            Users
        </div>
    )
}

export default Users