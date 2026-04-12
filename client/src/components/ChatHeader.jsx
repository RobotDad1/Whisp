import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div
      className="flex justify-between items-center border-b max-h-[84px] px-6 flex-1 transition-colors duration-300
      group-data-[theme=glass]/theme:bg-slate-800/50 group-data-[theme=glass]/theme:border-slate-700/50
      group-data-[theme=dark]/theme:bg-[#202c33] group-data-[theme=dark]/theme:border-transparent
      group-data-[theme=whatsapp]/theme:bg-[#0b5345] group-data-[theme=whatsapp]/theme:border-transparent bg-slate-800/50 border-slate-700/50"
    >
      <div className="flex items-center space-x-3">
        <div className={`avatar ${isOnline ? "online" : "offline"}`}>
          <div className="w-12 rounded-full">
            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
          </div>
        </div>

        <div>
          <h3 className="font-medium transition-colors duration-300 text-slate-200 group-data-[theme=whatsapp]/theme:text-white">{selectedUser.fullName}</h3>
          <p className="text-sm transition-colors duration-300 text-slate-400 group-data-[theme=whatsapp]/theme:text-white/80">{isOnline ? "Online" : "Offline"}</p>
        </div>
      </div>

      <button onClick={() => setSelectedUser(null)}>
        <XIcon className="w-5 h-5 transition-colors cursor-pointer text-slate-400 hover:text-slate-200 group-data-[theme=whatsapp]/theme:text-white group-data-[theme=whatsapp]/theme:hover:text-white/80" />
      </button>
    </div>
  );
}
export default ChatHeader;