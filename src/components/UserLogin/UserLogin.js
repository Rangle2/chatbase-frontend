import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import auth from "../Firebase/firebase-config"
import { useEffect, useState } from "react";
import "../UserLogin/UserLogin.css";
import ChatBase from "../ChatBase/ChatBase";
import ChatBaseIcon from "../images/ChatBase-Logo.png";




const UserLogin = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            console.log("User Sign In Success");


            const idToken = await userCredential.user.getIdToken();
            console.log("Firebase Id Token ", idToken);

            sendIdTokenToServer(idToken);

        } catch (error) {
            console.error("Error Google login ", error)
        }
    };


    const sendIdTokenToServer = async (idToken) => {
        try {
            const response = await fetch("http://localhost:8080/api/user/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain', // Use 'text/plain' for plain text
                    'Authorization': idToken,
                },
                body: idToken, // Directly use idToken as the request body
            });

            const data = await response.text();
            console.log('Server Response', data);
        } catch (error) {
            console.error('Error Sending ID Token', error);
        }
    }

    const handleChatbaseSign = async () =>{
       
        navigate('/register');

    }

    return (
        <div>
            {user ? (
                <ChatBase />
            ) : (

                <div className="Container">
                    <div className='Chatbase-container'>
                        <img className='Chatbase-Icon' src={ChatBaseIcon} alt="chat" />
                        <h2 className="login-h2">ChatBase</h2>
                    </div>
                    <div className='Buttons-Container'>

                        <button type="button" class="login-with-google-btn" onClick={handleGoogleSignIn}>Sign in with Google</button>
                        <button type='button' className='login-with-chatbase-btn' onClick={handleChatbaseSign}>Sign in with ChatBase</button>
                    </div>
                    <div className="Login-ask" style={{ color: '#76727C' }} type='button'>
                        Do you have account? 
                    </div>
                    <div className="Login-btn" style={{ color: '#0B70EB' }} type='button'>
                        Login!
                    </div>
                </div>

            )}
        </div>
    );
};

export default UserLogin;
