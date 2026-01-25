import { createContext, useContext, useState } from "react";
import chats from "../data/mockChats";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [chatList] = useState(chats);
  const [activeChat, setActiveChat] = useState(chats[0]);

  // 👇 mobile navigation
  const [showChat, setShowChat] = useState(false);

  const openChat = (chat) => {
    setActiveChat(chat);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const sendMessage = (text) => {
    if (!text) return;

    const message = {
      id: Date.now(),
      text,
      fromMe: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setActiveChat((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return (
    <ChatContext.Provider
      value={{
        chatList,
        activeChat,
        openChat,
        closeChat,
        sendMessage,
        showChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
