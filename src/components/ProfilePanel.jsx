import { ArrowLeft, Pencil } from "lucide-react";
import { useChat } from "../context/ChatContext";

export default function ProfilePanel() {
    const { openEditProfile, activeChat, goBackPanel, profileOpen } = useChat();

    return (
        <div
            className={`absolute right-0 top-0 h-full w-1/3 bg-[#111b21]
  transition-transform duration-300
  ${profileOpen ? "translate-x-0" : "translate-x-full"}
  z-[20]`}
        >

            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#2a3942]">
                <div className="flex items-center gap-4">
                    <button onClick={goBackPanel}>
                        <ArrowLeft />
                    </button>
                    <h2 className="text-lg font-medium">Contact info</h2>
                </div>

                <button onClick={openEditProfile}>
                    <Pencil size={18} />
                </button>
            </div>

            {/* Profile Content */}
            <div className="flex flex-col items-center py-8 border-b border-[#2a3942]">
                <img
                    src={activeChat?.avatar}
                    className="w-36 h-36 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{activeChat?.contactName}</h3>
                <p className="text-gray-400 mt-1">{activeChat?.phoneNumber}</p>
            </div>

            {/* Options */}
            <div className="p-4 space-y-4 text-sm">
                <PanelItem text="Media, links and docs" />
                <PanelItem text="Starred messages" />
                <PanelItem text="Mute notifications" toggle />
                <PanelItem text="Disappearing messages" sub="Off" />
                <PanelItem text="Advanced chat privacy" sub="Off" />
                <PanelItem text="Encryption" sub="Messages are end-to-end encrypted." />
            </div>
        </div>
    );
}

function PanelItem({ text, sub, toggle }) {
    return (
        <div className="flex justify-between items-center py-3 border-b border-[#1f2c33]">
            <div>
                <p>{text}</p>
                {sub && <p className="text-xs text-gray-400">{sub}</p>}
            </div>
            {toggle && <div className="w-10 h-5 bg-gray-600 rounded-full" />}
        </div>
    );
}
