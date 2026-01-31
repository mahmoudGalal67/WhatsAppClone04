import { useChat } from "../../context/ChatContext";

export default function DeletePopup({ onClose }) {
  const { selectedMessages, setMessages, clearSelection } = useChat();

  const handleDelete = () => {
    setMessages((prev) =>
      prev.filter((msg) => !selectedMessages.includes(msg.id)),
    );
    clearSelection();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#202c33] p-6 rounded-lg w-80">
        <h2 className="text-lg mb-4">
          Delete {selectedMessages.length} messages?
        </h2>
        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="text-gray-400">
            Cancel
          </button>
          <button onClick={handleDelete} className="text-red-500 font-semibold">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
