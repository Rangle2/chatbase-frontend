import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin/UserLogin';
import ChatBase from './components/ChatBase/ChatBase';
import "./App.css";
import UserRegister from './components/UserRegister/UserRegistration';
import ChatUI from './components/ChatBase/ChatUI';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/chat' element={<ChatUI />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
