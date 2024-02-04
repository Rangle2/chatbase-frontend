import * as React from "react";
import { Box, Typography, Card } from "@mui/material";
<<<<<<< HEAD
=======
import "./ChatBase.css";
>>>>>>> bf8f211 (feat: Added new friendship feature)


const ChatUI = ({ userMessage, handleSendMessage, handleInputChange, messages, setMessages }) => {
    return (
        <Box
            sx={{
                position: "relative",
                bottom: "68rem",
                left: "25rem",
                height: "1020px",
                width: "1111px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
                {messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </Box>

            {/* Message input section */}
            <div className='Msg-Container'>
                <div className='Message-Bg'></div>
                <img className='Add-Photo-Btn' width="40" height="40" src="https://img.icons8.com/android/24/FFFFFF/plus.png" alt="plus" />
                <input
                    className='Message-textbox'
                    id='textbox'
                    placeholder='Write a message'
                    type='textbox'
                    onChange={handleInputChange}
                    value={userMessage}
                />
                <img className='Add-Smile-Btn' width="40" height="40" src="https://img.icons8.com/ios-filled/50/FFFFFF/fat-emoji.png" alt="fat-emoji" />
                <img
                    className='Send-Message-Btn'
                    onClick={() => {
                        handleSendMessage();
                        // Update the messages array in ChatUI
<<<<<<< HEAD
                        setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: userMessage, sender: "friend" }]);
=======
                        setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: userMessage, sender: "user" }]);
>>>>>>> bf8f211 (feat: Added new friendship feature)
                    }}
                    width="40"
                    height="40"
                    src="https://img.icons8.com/material-sharp/24/FFFFFF/sent.png"
                    alt="sent"
                />
            </div>
        </Box>
    );
};

const Message = ({ message }) => {
    const isFriend = message.sender === "friend";

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: isFriend ? "flex-start" : "flex-end",
                mb: 2,
            }}
        >
            <Card
                variant="default"
                className="User-Msg-Container"
                sx={{
                    p: 1,
                    color: "white",
                    backgroundColor: isFriend ? "#489696" : "#5359B1",
                }}
            >
                <Typography variant="body1">{message.text}</Typography>
            </Card>
        </Box>
    );
};

export default ChatUI;
