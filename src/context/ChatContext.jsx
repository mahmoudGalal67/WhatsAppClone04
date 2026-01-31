import { createContext, useContext, useEffect, useState } from "react";
import chats from "../data/mockChats";
import { getConversations, getMessages, sendMessage } from "../api/chatApi";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);

  // 👇 mobile navigation
  const [showChat, setShowChat] = useState(false);


  useEffect(() => {
    getConversations().then(setConversations).catch(console.error);

  }, []);

  // Load messages when active chat changes
  useEffect(() => {
    if (!activeChat) return;

    setLoadingMessages(true);
    getMessages(activeChat.id)
      .then(setMessages).then(() => {
        console.log(messages);
      })
      .catch(console.error)
      .finally(() => setLoadingMessages(false));
  }, [activeChat]);

  const openChat = (chat) => {
    setActiveChat(chat);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const handlelSendMessage = (payload) => {
    if (!activeChat) return;


    sendMessage(activeChat.phoneNumber, payload.content)
    setMessages((prev) => [...prev, { createdAt: new Date(), content: payload.content, isIncoming: true }]);
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeChat,
        openChat,
        closeChat,
        handlelSendMessage,
        showChat,
        messages,
        loadingMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
