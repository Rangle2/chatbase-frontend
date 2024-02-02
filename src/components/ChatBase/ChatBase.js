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
      <img className='User-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile"/>
      <label className='User-Profile-Name'>User</label>
      <img className='Add-Friend' width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="add--v1"/>
      <img className='User-Settings' width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/settings.png" alt="settings"/>

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
