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
      <img className='User-Settings' onClick={handleSignout} width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/settings.png" alt="settings"/>
      <div className='Friend-List-Bg'></div>

      <input
      className='Search-Textbox'
      id='search'
      placeholder='Search'
      type='textbox'
      ></input>
      <img className='Search-Icon' width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/search--v1.png" alt="search--v1"/>


      <div className='Contact-Bg'></div>
      <img className='Contact-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile"/>
      <div className='Contact-Name'>Friend</div>
   

      
      <div className='Friend-Bg'></div>
      <img className='Friend-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile"/>
      <label className='Friend-Profile-Name'>Friend</label>
      <img className='Friend-Settings' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/ellipsis.png" alt="ellipsis"/>
     
      <div className='Message-Bg'></div>
      <img className='Add-Photo-Btn' width="40" height="40" src="https://img.icons8.com/android/24/FFFFFF/plus.png" alt="plus"/>
      
      <input
      className='Message-textbox'
      id='textbox'
      placeholder='Write a message'
      type='textbox'
      ></input>
      

     <img className='Add-Smile-Btn' width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/fat-emoji.png" alt="fat-emoji"/>
     <img className='Send-Message-Btn'width="40" height="40" src="https://img.icons8.com/material-sharp/24/FFFFFF/sent.png" alt="sent"/>
     <div className='Chat-Container'></div>
     <span className='User-Msg-Container'></span>
     <span className='Friend-Msg-Container'></span>
    </div>
  );
}

export default ChatBase;
