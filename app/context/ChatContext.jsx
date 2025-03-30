
import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState({});

  const sendMessage = (caregiverId, message) => {
    setChats((prev) => {
      const currentChat = prev[caregiverId] || [];
      return {
        ...prev,
        [caregiverId]: [...currentChat, message],
      };
    });
  };

  return (
    <ChatContext.Provider value={{ chats, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
