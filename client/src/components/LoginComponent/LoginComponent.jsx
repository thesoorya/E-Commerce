import React from 'react';
import { Link } from 'react-router-dom';
import './LoginComponent.css';
import SignUpComponent from '../SigunUpComponent/SignUpComponent';

const LoginComponent = () => {
    return (
        <main className='loginPage'>
            <div className="form-container">
                <p className="title">Login</p>
                <form className="form">
                    {/* <input type="text" className="input" placeholder="Name" /> */}
                    <input type="email" className="input" placeholder="Email" />
                    <input type="password" className="input" placeholder="Password" />
                    <button className="form-btn">Create account</button>
                </form>
                <p className="sign-up-label">
                    New User?<span className="sign-up-link">
                        <Link to='/register'>Register</Link>
                    </span>
                </p>
            </div>
        </main>
    );
};

export default LoginComponent;