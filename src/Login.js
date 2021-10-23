import React from 'react'
import { loginUrl } from './spotify'
import cover from './UPBEAT_POSTER.png';



function Login() {
    return (
        <div className="login">
            <img src= {cover}
             alt="" />
             <a href={loginUrl}>Login with Spotify</a>
        </div>
    )
}

export default Login
