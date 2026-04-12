import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton.jsx";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="p-4 rounded-lg cursor-pointer transition-colors duration-300
          group-data-[theme=glass]/theme:bg-cyan-500/10 group-data-[theme=glass]/theme:hover:bg-cyan-500/20
          group-data-[theme=dark]/theme:bg-[#202c33]/50 group-data-[theme=dark]/theme:hover:bg-[#202c33]
          group-data-[theme=whatsapp]/theme:bg-[#f5f6f6] group-data-[theme=whatsapp]/theme:hover:bg-[#ebebeb] bg-cyan-500/10 hover:bg-cyan-500/20"
          onClick={() => setSelectedUser(chat)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar ${onlineUsers.includes(chat._id) ? "online" : "offline"}`}>
              <div className="size-12 rounded-full">
                <img src={chat.profilePic || "/avatar.png"} alt={chat.fullName} />
              </div>
            </div>
            <h4 className="font-medium truncate transition-colors duration-300 text-slate-200 group-data-[theme=whatsapp]/theme:text-[#111b21]">{chat.fullName}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
export default ChatsList;