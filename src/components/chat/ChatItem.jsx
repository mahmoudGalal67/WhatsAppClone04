import { ChevronDown, FlagIcon, ForwardIcon, Share, TrashIcon } from "lucide-react";
import { useChat } from "../../context/ChatContext";
import { DateText } from "../../utils/utilis";
import Avatar from "../common/Avatar";
import { useEffect, useRef, useState } from "react";

export default function ChatItem({ chat }) {
  const { openChat, activeChat, selectionMode, setSelectionMode } = useChat();
  const [chatOption, setChatOption] = useState(false);
  const [showArrow, setshowArrow] = useState(false);
  const [selectedChats, setSelectedChats] = useState([]);
  const menuRef = useRef(null);

  const isSelected = selectedChats.includes(chat.id);

  const toggleChatSelection = (id) => {
    setSelectedChats((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setChatOption(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);


  return (
    <div
      onClick={() => openChat(chat)}
      onMouseEnter={() => setshowArrow(true)}
      onMouseLeave={() => setshowArrow(false)}
      className={`relative flex  items-center gap-5 my-2 rounded-lg px-4 py-3 cursor-pointer hover:bg-[#111b21]
      ${activeChat?.id === chat.id ? "bg-[#111b21]" : ""}`}
    >
      {selectionMode && (
        <label className="relative flex items-center cursor-pointer my-auto">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleChatSelection(chat.id)}
            className="peer sr-only"
          />
          <div
            className="w-5 h-5 rounded-md border-2 border-lightgray flex items-center justify-center
                  peer-checked:bg-[#00a884] peer-checked:border-[#00a884] transition-all"
          >
            <svg
              className={`w-3 h-3 text-black ${isSelected ? "opacity-100" : "opacity-0"} peer-checked:opacity-100`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </label>
      )}
      {/* Dropdown */}
      {chatOption && (
        <div ref={menuRef} className={`absolute top-8 right-0 w-48 h-fit bg-[#233138] shadow-lg rounded-md text-sm z-50 rounded-b-lg px-2 py-4`}>

          <MenuItem
            text="Forward"
            icon={<ForwardIcon width={16} height={16} />}
          />
          <MenuItem
            text="Share Message"
            icon={<Share width={16} height={16} />}
          />
          <div className="w-full h-[1px] bg-gray-600 my-2" />


          <MenuItem
            onClick={() => {
              setChatOption(false);
              setSelectionMode(true);
            }}
            text="Delete chat"
            danger
            icon={<TrashIcon width={16} height={16} />}
          />
        </div>
      )}

      <Avatar src={chat.avatar} />
      {/* Hover Arrow */}
      {showArrow && !selectionMode && (
        <button
          onClick={() => {
            setChatOption((prev) => !prev);
          }}
          className="absolute right-5 bottom-3 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
        >
          <ChevronDown size={16} />
        </button>
      )}

      <div className="flex-1  pb-2">
        <div className="flex justify-between">
          <h4 className="text-sm font-medium">{chat.contactName}</h4>
          <span className="text-xs text-gray-400"><DateText date={chat.createdAt} /></span>
        </div>
        <p className="text-xs text-gray-400 truncate mr-auto text-left mt-2">{chat.lastMessage?.content || 'last message'}</p>
      </div>

    </div>

  );
}

function MenuItem({ text, danger, icon, onClick }) {
  return (
    <div
      className={` px-2 py-2 cursor-pointer hover:bg-[#111b21] flex items-center gap-1 rounded-lg
      ${danger ? "text-red-400 hover:bg-red-400/10" : "text-gray-200"}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </div>
  );
}
