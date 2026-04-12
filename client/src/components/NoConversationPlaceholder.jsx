import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 transition-colors duration-300">
      <div className="size-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300
        group-data-[theme=glass]/theme:bg-cyan-500/20 group-data-[theme=dark]/theme:bg-[#00a884]/20 group-data-[theme=whatsapp]/theme:bg-[#00a884]/20 bg-cyan-500/20">
        <MessageCircleIcon className="size-10 transition-colors duration-300 group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:text-[#00a884] text-cyan-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-data-[theme=glass]/theme:text-slate-200 group-data-[theme=dark]/theme:text-slate-200 group-data-[theme=whatsapp]/theme:text-[#111b21] text-slate-200">Select a conversation</h3>
      <p className="max-w-md transition-colors duration-300 group-data-[theme=glass]/theme:text-slate-400 group-data-[theme=dark]/theme:text-slate-400 group-data-[theme=whatsapp]/theme:text-slate-500 text-slate-400">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;