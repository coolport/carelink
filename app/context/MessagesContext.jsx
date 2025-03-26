import React, { createContext, useContext, useState } from 'react';

// Create the context
const MessagesContext = createContext();

// Custom hook for consuming context easily
export const useMessages = () => useContext(MessagesContext);

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToMessages = (caregiver) => {
    if (!messages.find((msg) => msg.id === caregiver.id)) {
      setMessages((prev) => [...prev, caregiver]);
    }
  };

  return (
    <MessagesContext.Provider value={{ messages, addToMessages }}>
      {children}
    </MessagesContext.Provider>
  );
};
