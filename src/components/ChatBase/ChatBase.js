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
    <div>
      <button onClick={handleSignout}></button>
    </div>
  );
}

export default ChatBase;
