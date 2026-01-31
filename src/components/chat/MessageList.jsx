import { useChat } from "../../context/ChatContext";
import Message from "./Message";

export default function MessageList() {
  const { messages } = useChat();

  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-2">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </div>
  );
}
