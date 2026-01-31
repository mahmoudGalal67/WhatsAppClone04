import { useChat } from "../../context/ChatContext";
import { Trash2, X } from "lucide-react";

export default function SelectionBar({ onDelete }) {
  const { selectedMessages, clearSelection } = useChat();

  return (
    <div className="h-14 bg-[#202c33] flex items-center justify-between px-4 border-b border-[#2a3942]">
      <div className="flex items-center gap-4">
        <button onClick={clearSelection}>
          <X />
        </button>
        <span>{selectedMessages.length} selected</span>
      </div>

      <button
        onClick={onDelete}
        className="text-red-400 hover:text-red-600 transition"
      >
        <Trash2 />
      </button>
    </div>
  );
}
