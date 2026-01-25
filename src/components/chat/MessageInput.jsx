import { useState } from "react";
import { useChat } from "../../context/ChatContext";
import { PlusIcon, SendIcon, SmileIcon } from "lucide-react";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { sendMessage } = useChat();

  const submit = (e) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <form
      onSubmit={submit}
      className="h-14 px-4 flex items-center gap-3 bg-[#202c33]"
    >
      <div className="relative flex-1 bg-[#111b21] px-4 py-2 rounded-3xl outline-none">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=" text-sm w-full outline-none pl-18"
          placeholder="Type a message"
        />
        <SendIcon className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2" />
        <PlusIcon className="w-6 h-6 font-[600] text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <SmileIcon className="w-6 h-6 font-[600] text-gray-400 absolute left-12 top-1/2 -translate-y-1/2" />
      </div>
    </form>
  );
}
