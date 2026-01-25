import { LogOutIcon, SearchIcon } from "lucide-react";
import ChatList from "../chat/ChatList";
import Avatar from "../common/Avatar";
import { useEffect, useRef, useState } from "react";
import { BoxSelectIcon, MessageSquareTextIcon, UserIcon } from "lucide-react";
import { useChat } from "../../context/ChatContext";

export default function Sidebar() {
  const { showChat } = useChat();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <aside
      className={`
    bg-[#202c33] border-r border-[#2a3942]
    flex flex-col
    w-full md:w-[520px]
    h-full

    absolute md:relative
    inset-y-0 left-0

    transition-transform duration-300 ease-in-out
    ${showChat ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
  `}
    >
      {/* Header */}
      <div className="h-14 px-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Avatar />
          <h1 className="text-2xl font-bold">WhatsApp</h1>
        </div>
        <div className="flex gap-4 text-gray-400 relative" ref={menuRef}>
          <span className="text-2xl font-bold cursor-pointer" onClick={() => setOpen(!open)}>⋮</span>
          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 top-10 w-48 bg-[#233138] shadow-lg rounded-md py-1 text-sm z-50 rounded-b-lg px-2 py-4">
              <MenuItem text="Contact info" icon={<UserIcon width={16} height={16} />} />
              <MenuItem text="Select messages" icon={<BoxSelectIcon width={16} height={16} />} />
              <MenuItem text="Mute notifications" icon={<MessageSquareTextIcon width={16} height={16} />} />
              <MenuItem text="Clear messages" danger icon={<MessageSquareTextIcon width={16} height={16} />} />
              <MenuItem text="Logout" danger icon={<LogOutIcon width={16} height={16} />} />
            </div>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="p-2 relative">
        <SearchIcon className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 " />
        <input
          className="w-full pl-8
          placeholder:text-gray-400
           bg-[#111b21] px-4 py-2 rounded-lg text-sm outline-none"
          placeholder="Search or start a new chat"
        />
      </div>

      <ChatList />
    </aside>
  );
}

function MenuItem({ text, danger, icon }) {
  return (
    <div
      className={` px-2 py-2 cursor-pointer hover:bg-[#111b21] flex items-center gap-1 rounded-lg
      ${danger ? "text-red-400" : "text-gray-200"}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </div>
  );
}

