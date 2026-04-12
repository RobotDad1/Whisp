import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <div className="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300
        group-data-[theme=glass]/theme:bg-cyan-500/10 group-data-[theme=dark]/theme:bg-[#00a884]/10 group-data-[theme=whatsapp]/theme:bg-[#00a884]/10 bg-cyan-500/10">
        <MessageCircleIcon className="w-8 h-8 transition-colors duration-300 group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:text-[#00a884] text-cyan-400" />
      </div>
      <div>
        <h4 className="font-medium mb-1 transition-colors duration-300 group-data-[theme=glass]/theme:text-slate-200 group-data-[theme=dark]/theme:text-slate-200 group-data-[theme=whatsapp]/theme:text-[#111b21] text-slate-200">No conversations yet</h4>
        <p className="text-sm px-6 transition-colors duration-300 group-data-[theme=glass]/theme:text-slate-400 group-data-[theme=dark]/theme:text-slate-400 group-data-[theme=whatsapp]/theme:text-slate-500 text-slate-400">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>
      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm rounded-lg transition-colors duration-300
        group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=glass]/theme:bg-cyan-500/10 group-data-[theme=glass]/theme:hover:bg-cyan-500/20
        group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=dark]/theme:bg-[#00a884]/10 group-data-[theme=dark]/theme:hover:bg-[#00a884]/20
        group-data-[theme=whatsapp]/theme:text-white group-data-[theme=whatsapp]/theme:bg-[#00a884] group-data-[theme=whatsapp]/theme:hover:bg-[#008f6f] text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20"
      >
        Find contacts
      </button>
    </div>
  );
}
export default NoChatsFound;