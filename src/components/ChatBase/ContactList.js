import React from 'react';

const ContactList = ({ userList, handleContactClick }) => {
  return (
    <div className='Contact-Bg'>
      {userList.map((user, index) => (
        
        <div key={user.id} onClick={() => handleContactClick(user)} className='Contact-Item'>
          
          <div className='contact-name'>{user.username}</div>
          <img className='contact-icon' width='50' height='50' src={user.avatar} alt={user.name} />
          {index !== userList.length - 1 && <div style={{ marginBottom: '20px' }}></div>}
        </div>
      ))}
    </div>
  );
}

export default ContactList;
