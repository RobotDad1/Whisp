import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2">
      <button
        onClick={() => setActiveTab("chats")}
        className={`tab transition-colors duration-300 ${
          activeTab === "chats" 
            ? "group-data-[theme=glass]/theme:bg-cyan-500/20 group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=dark]/theme:bg-[#00a884]/20 group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:bg-[#00a884] group-data-[theme=whatsapp]/theme:text-white bg-cyan-500/20 text-cyan-400" 
            : "text-slate-400 group-data-[theme=whatsapp]/theme:text-[#54656f]"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`tab transition-colors duration-300 ${
          activeTab === "contacts" 
            ? "group-data-[theme=glass]/theme:bg-cyan-500/20 group-data-[theme=glass]/theme:text-cyan-400 group-data-[theme=dark]/theme:bg-[#00a884]/20 group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:bg-[#00a884] group-data-[theme=whatsapp]/theme:text-white bg-cyan-500/20 text-cyan-400" 
            : "text-slate-400 group-data-[theme=whatsapp]/theme:text-[#54656f]"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;