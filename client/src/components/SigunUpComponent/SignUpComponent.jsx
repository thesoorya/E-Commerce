import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpComponent.css';
import LoginComponent from '../LoginComponent/LoginComponent';

const SignUpComponent = () => {
    return (
        <main className='loginPage'>
            <div className="form-container">
                <p className="title">Create Account</p>
                <form className="form">
                    <input type="text" className="input" placeholder="Name" />
                    <input type="email" className="input" placeholder="Email" />
                    <input type="password" className="input" placeholder="Password" />
                    <button className="form-btn">Create Account</button>
                </form>
                <p className="login-label">
                    Already have an account?<span className="login-link"><Link to='/login'>Log in</Link> </span>
                </p>
            </div>
        </main>
    );
};

export default SignUpComponent;