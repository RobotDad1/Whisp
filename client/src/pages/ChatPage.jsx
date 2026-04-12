import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

function ChatPage() {
    const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-6xl h-[800px]">
      <BorderAnimatedContainer>
        {/* LEFT SIDE */}
        <div className="w-80 flex flex-col transition-colors duration-300 group-data-[theme=glass]/theme:bg-slate-800/50 group-data-[theme=glass]/theme:backdrop-blur-sm group-data-[theme=dark]/theme:bg-[#111b21] group-data-[theme=whatsapp]/theme:bg-[#ffffff]">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col transition-colors duration-300 group-data-[theme=glass]/theme:bg-slate-900/50 group-data-[theme=glass]/theme:backdrop-blur-sm group-data-[theme=dark]/theme:bg-[#0b141a] group-data-[theme=whatsapp]/theme:bg-[#efeae2]">
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
export default ChatPage;