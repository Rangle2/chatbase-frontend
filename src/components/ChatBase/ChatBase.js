import React from 'react';
import "..//ChatBase/ChatBase.css";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase-config";

const handleSignout = async () => {
  try {
      await signOut(auth);
      console.log("User Signed out");
  } catch (error) {
      console.error("Sign out Failed", error);
  }
};

const ChatBase = () => {
  return (
    <div className='Main-Container'>
      <div className='User-Bg'></div>
      <div className='Friend-List-Bg'></div>
      <div className='Friend-Bg'></div>
      <div className='Message-Bg'></div>
      <input
      className='Message-textbox'
      id='textbox'
      placeholder='Write a message'
      type='textbox'
      ></input>
      <button onClick={handleSignout}></button>
    </div>
  );
}

export default ChatBase;
