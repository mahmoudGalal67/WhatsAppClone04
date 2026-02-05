import { createContext, useContext, useEffect, useState } from "react";
import chats from "../data/mockChats";
import { getConversations, getMessages, sendMessage } from "../api/chatApi";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [loadingConversations, setLoadingConversations] = useState(false);
  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [selectionChatMode, setSelectionChatMode] = useState('');
  const [selectedChats, setSelectedChats] = useState([]);
  const [panelStack, setPanelStack] = useState([]);
  // 👇 mobile navigation
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setLoadingConversations(true)
    getConversations().then(setConversations).catch(console.error).finally(() => setLoadingConversations(false));
  }, []);

  // Load messages when active chat changes
  useEffect(() => {
    if (!activeChat) return;

    setLoadingMessages(true);
    getMessages(activeChat.id)
      .then(setMessages)
      .then(() => {
        console.log(messages);
      })
      .catch(console.error)
      .finally(() => setLoadingMessages(false));
  }, [activeChat]);

  const toggleMessageSelection = (id) => {
    setSelectedMessages((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  };

  const clearSelection = () => {
    setSelectionMode(false);
    setSelectedMessages([]);
  };

  const clearChatSelection = () => {
    setSelectionChatMode(false);
    setSelectedChats([]);
  };

  const openChat = (chat) => {
    setActiveChat(chat);
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  const handlelSendMessage = (payload) => {
    if (!activeChat) return;

    sendMessage(activeChat.phoneNumber, payload.content);
    setMessages((prev) => [
      ...prev,
      { createdAt: new Date(), content: payload.content, isIncoming: true },
    ]);
  };

  const openProfile = () => setPanelStack(["profile"]);

  const openEditProfile = () =>
    setPanelStack((prev) => [...prev, "editProfile"]);

  const goBackPanel = () =>
    setPanelStack((prev) => prev.slice(0, -1));

  const closeAllPanels = () => setPanelStack([]);
  const profileOpen = panelStack.includes("profile");
  const editProfileOpen = panelStack.includes("editProfile");


  return (
    <ChatContext.Provider
      value={{
        conversations,
        activeChat,
        setActiveChat,
        openChat,
        closeChat,
        handlelSendMessage,
        showChat,
        messages,
        loadingMessages,
        loadingConversations,
        selectionMode,
        setSelectionMode,
        selectedMessages,
        toggleMessageSelection,
        clearSelection,
        setMessages,
        setConversations,
        selectionChatMode,
        setSelectionChatMode,
        setSelectedChats,
        selectedChats,
        clearChatSelection,
        openProfile,
        openEditProfile,
        goBackPanel,
        closeAllPanels,
        profileOpen,
        editProfileOpen,
        panelStack,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);
