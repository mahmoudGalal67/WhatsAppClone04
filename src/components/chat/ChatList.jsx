import { useChat } from "../../context/ChatContext";
import ChatItem from "./ChatItem";

export default function ChatList() {
  const { chatList } = useChat();

  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-hover">
      {chatList.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
}
