import React from 'react'
import '../Css/Login.css'
import { loginUrl } from '../spotify';

const Login = () => {
    return (
        <div className="login">
            <img src="./Images/logo.png" alt="Spotify Logo"/>
            <h1>Spotify</h1>
            <br/>
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    )
}

export default Login;