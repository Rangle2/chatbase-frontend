import React, { useState } from 'react';
import ChatBaseIcon from "../images/ChatBase-Logo.png";
import "./UserRegister.css";

const UserRegister = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };





    return (
        <div className="Container-login">
            <div className='Chatbase-container-login'>
                <img className='Chatbase-Icon-login' src={ChatBaseIcon} alt="chat" />
                <h2 className="login-header">ChatBase</h2>
            </div>

            <form onSubmit={handleSubmit}>


                <input
                    type="username"
                    placeholder='Username'
                    id="register"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />


                <input
                    type="password"
                    placeholder='Password'
                    id="register"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder='Password Again'
                    id="register"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />


                <input
                    type="email"
                    placeholder='Email'
                    id="register"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <input
                    className='checkBox'
                    type="checkbox"
                    id="agreeToTerms"
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                />

                <label className='agreeTerm' htmlFor="agreeToTerms">
                    I agree to the terms of service</label>


                <button className='register-btn' type="submit" disabled={!agreeToTerms}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default UserRegister;

