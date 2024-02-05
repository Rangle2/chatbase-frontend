import React, { useState, useEffect } from 'react';
import "./ChatBase.css";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase-config";
import ChatUI from './ChatUI';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Box } from '@mui/material';
import ContactList from './ContactList';




const ChatBase = () => {
  const [user] = useAuthState(auth);
  const [username] = useState(user.displayName);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [userList, setUserList] = useState([]);
  const [friendUsername, setFriendUsername] = useState("");




  const handleContactClick = (friend) => {
    setSelectedFriend(friend);
  };



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

 

  const handleAddFriend = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/friends/add?username=${encodeURIComponent(username)}&friendUsername=${encodeURIComponent(friendUsername)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        }),
      });

      console.log(username);

      if (response.ok) {
        // İşlem başarılı ise burada gerekli aksiyonları alabilirsiniz
        console.log('Arkadaş ekleme başarılı');
      } else {
        console.error('Arkadaş ekleme başarısız');
      }
    } catch (error) {
      console.error('Bir hata oluştu', error);
    }
  };



  useEffect(() => {

    if (user && user.displayName) {
      const username = user.displayName;

      fetch(`http://localhost:8080/api/friends/list?username=${username}`)
        .then(response => response.json())
        .then(data => setUserList(data))
        .catch(error => console.error('Error:', error));
        console.log(userList);

    }

   
    
  }, [user]);




  return (
    <div className='Main-Container'>

      {/* USER SECTION */}
      <div className='User-Bg'></div>
      {user && user.photoURL ? (
        <img className='User-Profile' width="50" height="50" src={user.photoURL} alt="user-profile" />
      ) : (
        <img className='User-Profile' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FFFFFF/cat-profile.png" alt="cat-profile" />
      )}
      <label className='User-Profile-Name'>{user ? user.displayName || 'User' : 'User'}</label>
      <img className='Add-Friend' onClick={handleAddFriend} width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/add--v1.png" alt="add--v1" />
      <img className='User-Settings' onClick={handleSignout} width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/settings.png" alt="settings" />


      {/* FRIEND LIST SECTION */}
      <div className='Friend-List-Bg'></div>
      <input
        className='Search-Textbox'
        id='search'
        placeholder='Search'
        type='textbox'
        onChange={(e) => setFriendUsername(e.target.value)}
      
      ></input>

      <img className='Search-Icon' width="32" height="32" src="https://img.icons8.com/windows/32/FFFFFF/search--v1.png" alt="search--v1" />

      {/* CONTACT LIST SECTION */}
      <ContactList userList={userList} handleContactClick={handleContactClick} />



      {/* FRIEND SECTION */}
      {selectedFriend && (
        <div className='Friend-Bg'>
          <img
            className='Friend-Profile'
            width='50'
            height='50'
            src={selectedFriend.avatar}
            alt={selectedFriend.username}
          />
          <label className='Friend-Profile-Name'>{selectedFriend.username}</label>
          <img
            className='Friend-Settings'
            width='50'
            height='50'
            src='https://img.icons8.com/ios-filled/50/FFFFFF/ellipsis.png'
            alt='ellipsis'
          />
        </div>
      )}

      {/* MESSAGE TEXTBOX SECTION */}



      {/* MESSAGE SECTION */}
      {selectedFriend && (
        <ChatUI
          userMessage={userMessage}
          handleSendMessage={handleSendMessage}
          handleInputChange={handleInputChange}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </div>
  );

}

export default ChatBase;
