import React from 'react'
import './Login.css'
import LoginComponent from '../../components/LoginComponent/LoginComponent'
import LoginSignUpNav from '../../components/LoginSignUpNav/LoginSignUpNav'
const Login = () => {
    return (
        <div>
            <LoginSignUpNav />
            <LoginComponent />
        </div>
    )
}

export default Login