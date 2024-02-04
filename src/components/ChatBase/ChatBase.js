import React, {useState} from 'react';
import "..//ChatBase/ChatBase.css";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase-config";
import ChatUI from './ChatUI';


const ChatBase = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  

const handleSignout = async () => {
  try {
      await signOut(auth);
      console.log("User Signed out");
  } catch (error) {
      console.error("Sign out Failed", error);
  }
};


const handleSendMessage = () => {
  if (userMessage.trim() !== "") {
    
    

    // Clear the input field
    setUserMessage("");
  }
};

const handleInputChange = (event) => {
  setUserMessage(event.target.value);
};





  return (
    <div className='Main-Container'>

      {/* USER SECTION */}
      <div className='User-Bg'></div>
      <img className='User-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile"/>
      <label className='User-Profile-Name'>User</label>
      <img className='Add-Friend' width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="add--v1"/>
      <img className='User-Settings' onClick={handleSignout} width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/settings.png" alt="settings"/>


      {/* FRIEND LIST SECTION */}
      <div className='Friend-List-Bg'></div>
      <input
      className='Search-Textbox'
      id='search'
      placeholder='Search'
      type='textbox'
      ></input>
      <img className='Search-Icon' width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/search--v1.png" alt="search--v1"/>

      {/* CONTACT LIST SECTION */}
      <div className='Contact-Bg'></div>
      <img className='Contact-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile"/>
      <div className='Contact-Name'>Friend</div>
   
        
      {/* FRIEND SECTION */}
      <div className='Friend-Bg'></div>
      <img className='Friend-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile"/>
      <label className='Friend-Profile-Name'>Friend</label>
      <img className='Friend-Settings' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/ellipsis.png" alt="ellipsis"/>

 
      {/* MESSAGE TEXTBOX SECTION */}
      
      

     {/* MESSAGE SECTION */}
      <ChatUI 
      userMessage={userMessage}
      handleSendMessage={handleSendMessage}
      handleInputChange={handleInputChange} 
      messages={messages}   // Pass the messages array to ChatUI
      setMessages={setMessages} />
     </div>
  );
}

export default ChatBase;
