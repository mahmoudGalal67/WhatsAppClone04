import { useChat } from "../../context/ChatContext";
import { DateText } from "../../utils/utilis";
import Avatar from "../common/Avatar";

export default function ChatItem({ chat }) {
  const { openChat, activeChat } = useChat();

  return (
    <div
      onClick={() => openChat(chat)}
      className={`flex gap-3 my-2 rounded-lg px-4 py-3 cursor-pointer hover:bg-[#111b21]
      ${activeChat?.id === chat.id ? "bg-[#111b21]" : ""}`}
    >
      <Avatar src={chat.avatar} />

      <div className="flex-1  pb-2">
        <div className="flex justify-between">
          <h4 className="text-sm font-medium">{chat.contactName}</h4>
          <span className="text-xs text-gray-400"><DateText date={chat.createdAt} /></span>
        </div>
        <p className="text-xs text-gray-400 truncate mr-auto text-left mt-2">{chat.lastMessage || 'last message'}</p>
      </div>
    </div>
  );
}
