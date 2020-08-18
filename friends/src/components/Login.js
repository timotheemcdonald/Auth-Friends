import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth'

const blankForm = {
    credentials: {
    username: '',
    password:''
    }
}

const Login = () => {

    const [form, setForm] = useState(blankForm)

    const onSubmit = (event) => {
        event.preventDefault()
        axiosWithAuth()
        .post('/api/login', form.credentials)
        .then(value => {
            console.log(value, 'this is value in submit button')
            localStorage.setItem('token', value.data)
            history.push('/protected')
            console.log(value.data, 'this is value.data')
            console.log('submit sucessful on login page')
        })
        .catch(error => {
            console.log(error, 'error in submit on login')
        })
    }
    
    const onChange = (event) => {
       setForm({
           ...form,
           [event.target.name]: event.target.value
       })
    }

    return(
        <div>
           Enter Username and Password:
            <form onSubmit={onSubmit}>
                <input 
                type="text"
                name="username"
                value={form.credentials.name}
                onChange={onChange}
                />
                <input 
                type="password"
                name="password"
                value={form.credentials.password}
                onChange={onChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;