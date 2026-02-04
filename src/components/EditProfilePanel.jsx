import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { useChat } from "../context/ChatContext";

export default function EditProfilePanel() {
    const { editProfileOpen, goBackPanel, activeChat } = useChat();
    const [name, setName] = useState(activeChat?.contactName || "");
    const [phone, setPhone] = useState(activeChat?.phoneNumber || "");

    return (
        <div
            className={`absolute right-0 top-0 h-full w-1/3 bg-[#0b141a]
  transition duration-300
  ${editProfileOpen ? "translate-x-0" : "translate-x-full"}
  z-[30]`}
        >

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2a3942]">
                <div className="flex items-center gap-4">
                    <button onClick={goBackPanel}>
                        <ArrowLeft />
                    </button>
                    <h2 className="text-lg font-medium">Edit contact</h2>
                </div>

                <button className="bg-[#00a884] p-2 rounded-full">
                    <Check size={18} />
                </button>
            </div>

            {/* Form */}
            <div className="p-6 space-y-6">
                <div>
                    <label className="text-sm text-gray-400">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-600 focus:border-[#00a884] outline-none py-2"
                    />
                </div>

                <div>
                    <label className="text-sm text-gray-400">Phone</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-600 focus:border-[#00a884] outline-none py-2"
                    />
                </div>

                <div className="flex items-center justify-between mt-8">
                    <span>Sync contact to phone</span>
                    <div className="w-12 h-6 bg-[#00a884] rounded-full" />
                </div>
            </div>
        </div>
    );
}
