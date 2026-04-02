import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

function ChatContainer() {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();

    // clean up
    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <ChatHeader />
      <div className="flex-1 px-6 overflow-y-auto py-8">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((msg, index) => {
              const msgDate = new Date(msg.createdAt);
              const today = new Date();
              const yesterday = new Date(today);
              yesterday.setDate(yesterday.getDate() - 1);
              
              let currentDateStr = "";
              if (msgDate.toDateString() === today.toDateString()) {
                currentDateStr = "Today";
              } else if (msgDate.toDateString() === yesterday.toDateString()) {
                currentDateStr = "Yesterday";
              } else {
                currentDateStr = msgDate.toLocaleDateString(undefined, {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });
              }

              let showDateHeader = false;
              if (index === 0) {
                showDateHeader = true;
              } else {
                const prevMsgDate = new Date(messages[index - 1].createdAt);
                showDateHeader = msgDate.toDateString() !== prevMsgDate.toDateString();
              }

              return (
                <div key={msg._id} className="space-y-6">
                  {showDateHeader && (
                    <div className="flex justify-center my-4">
                      <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full">
                        {currentDateStr}
                      </span>
                    </div>
                  )}
                  <div
                    className={`chat ${msg.senderId === authUser._id ? "chat-end" : "chat-start"}`}
                  >
                    <div
                      className={`chat-bubble relative ${
                        msg.senderId === authUser._id
                          ? "bg-cyan-600 text-white"
                          : "bg-slate-800 text-slate-200"
                      }`}
                    >
                      {msg.image && (
                        <img src={msg.image} alt="Shared" className="rounded-lg h-48 object-cover" />
                      )}
                      {msg.text && <p className="mt-2">{msg.text}</p>}
                      <p className="text-xs mt-1 opacity-75 flex items-center gap-1">
                        {msgDate.toLocaleTimeString(undefined, {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* 👇 scroll target */}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </>
  );
}

export default ChatContainer;