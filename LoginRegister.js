import React, { useState, useEffect } from 'react';
import './LoginRegister.css';
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    useEffect(() => {
        setLoginUsername('');
        setLoginPassword('');
        setRegisterUsername('');
        setRegisterEmail('');
        setRegisterPassword('');
    }, [action]);

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Login Form Submitted");
        console.log("Username:", loginUsername);
        console.log("Password:", loginPassword);
        setLoginUsername('');
        setLoginPassword('');
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log("Registration Form Submitted");
        console.log("Username:", registerUsername);
        console.log("Email:", registerEmail);
        console.log("Password:", registerPassword);
        setRegisterUsername('');
        setRegisterEmail('');
        setRegisterPassword('');
    };

    return (
        <div className={`wrap${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} placeholder='Username' required/> <FaUser className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder='Password' required/> <FaLock className='icon'/>
                    </div>

                    <div className='rember-forgot'>
                        <label><input type="checkbox"/> Remember Me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>
                    <div className='register-link'>
                        <p>Don't have an account?
                            <a href='#' onClick={registerLink}>Register</a>
                        </p>
                    </div>
                </form>
            </div>
            <div className="form-box register">
                <form onSubmit={handleRegisterSubmit}>
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type='text' value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} placeholder='Username' required/> <FaUser className='icon'/>
                    </div>

                    <div className='input-box'>
                        <input type='email' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder='Email' required/> <FaEnvelope className='icon'/>
                    </div>
                    <div className='input-box'>
                        <input type='password' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder='Password' required/> <FaLock className='icon'/>
                    </div>

                    <div className='rember-forgot'>
                        <label><input type="checkbox"/>i agree the terms & conditions</label>
                    </div>

                    <button type="submit">Register</button>
                    <div className='register-link'>
                        <p>Already have an account?
                            <a href='#' onClick={loginLink}>Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
