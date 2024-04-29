import React from 'react'
import './Signup.css'
import SignUpComponent from '../../components/SigunUpComponent/SignUpComponent'
import LoginSignUpNav from '../../components/LoginSignUpNav/LoginSignUpNav'
const Signup = () => {
    return (
        <>
            <LoginSignUpNav />
            <SignUpComponent />
        </>
    )
}

export default Signup