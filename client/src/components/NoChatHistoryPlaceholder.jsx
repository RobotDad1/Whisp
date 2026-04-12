import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-all duration-300
        group-data-[theme=glass]/theme:bg-gradient-to-br group-data-[theme=glass]/theme:from-cyan-500/20 group-data-[theme=glass]/theme:to-cyan-400/10
        group-data-[theme=dark]/theme:bg-[#00a884]/10
        group-data-[theme=whatsapp]/theme:bg-[#00a884]/10 bg-gradient-to-br from-cyan-500/20 to-cyan-400/10">
        <MessageCircleIcon className="size-8 transition-colors duration-300 group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:text-[#00a884] text-cyan-400" />
      </div>
      <h3 className="text-lg font-medium mb-3 transition-colors duration-300 group-data-[theme=glass]/theme:text-slate-200 group-data-[theme=dark]/theme:text-slate-200 group-data-[theme=whatsapp]/theme:text-[#111b21] text-slate-200">
        Start your conversation with {name}
      </h3>
      <div className="flex flex-col space-y-3 max-w-md mb-5">
        <p className="text-sm transition-colors duration-300 group-data-[theme=glass]/theme:text-slate-400 group-data-[theme=dark]/theme:text-slate-400 group-data-[theme=whatsapp]/theme:text-slate-500 text-slate-400">
          This is the beginning of your conversation. Send a message to start chatting!
        </p>
        <div className="h-px w-32 border-none transition-colors duration-300 
          group-data-[theme=glass]/theme:bg-gradient-to-r group-data-[theme=glass]/theme:from-transparent group-data-[theme=glass]/theme:via-cyan-500/30 group-data-[theme=glass]/theme:to-transparent
          group-data-[theme=dark]/theme:bg-slate-700/50
          group-data-[theme=whatsapp]/theme:bg-[#d1d7db] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mx-auto"></div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        <button className="px-4 py-2 text-xs font-medium rounded-full transition-colors duration-300
          group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=glass]/theme:bg-cyan-500/10 group-data-[theme=glass]/theme:hover:bg-cyan-500/20
          group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=dark]/theme:bg-[#00a884]/10 group-data-[theme=dark]/theme:hover:bg-[#00a884]/20
          group-data-[theme=whatsapp]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:bg-[#00a884]/10 group-data-[theme=whatsapp]/theme:hover:bg-[#00a884]/20 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20">
          👋 Say Hello
        </button>
        <button className="px-4 py-2 text-xs font-medium rounded-full transition-colors duration-300
          group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=glass]/theme:bg-cyan-500/10 group-data-[theme=glass]/theme:hover:bg-cyan-500/20
          group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=dark]/theme:bg-[#00a884]/10 group-data-[theme=dark]/theme:hover:bg-[#00a884]/20
          group-data-[theme=whatsapp]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:bg-[#00a884]/10 group-data-[theme=whatsapp]/theme:hover:bg-[#00a884]/20 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20">
          🤝 How are you?
        </button>
        <button className="px-4 py-2 text-xs font-medium rounded-full transition-colors duration-300
          group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=glass]/theme:bg-cyan-500/10 group-data-[theme=glass]/theme:hover:bg-cyan-500/20
          group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=dark]/theme:bg-[#00a884]/10 group-data-[theme=dark]/theme:hover:bg-[#00a884]/20
          group-data-[theme=whatsapp]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:bg-[#00a884]/10 group-data-[theme=whatsapp]/theme:hover:bg-[#00a884]/20 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20">
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;