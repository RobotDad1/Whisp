import { useRef, useState } from "react";
import useKeyboardSound from "../hooks/useKeyboardSound";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import { ImageIcon, SendIcon, XIcon } from "lucide-react";

function MessageInput() {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();

    sendMessage({
      text: text.trim(),
      image: imagePreview,
    });
    setText("");
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="p-4 border-t transition-colors duration-300 group-data-[theme=glass]/theme:border-slate-700/50 group-data-[theme=dark]/theme:border-[#202c33] group-data-[theme=dark]/theme:bg-[#202c33] group-data-[theme=whatsapp]/theme:border-[#f0f2f5] group-data-[theme=whatsapp]/theme:bg-[#f0f2f5] border-slate-700/50">
      {imagePreview && (
        <div className="max-w-3xl mx-auto mb-3 flex items-center">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-slate-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-200 hover:bg-slate-700"
              type="button"
            >
              <XIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="max-w-3xl mx-auto flex space-x-4">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            isSoundEnabled && playRandomKeyStrokeSound();
          }}
          className="flex-1 rounded-lg py-2 px-4 outline-none transition-colors duration-300
          group-data-[theme=glass]/theme:bg-slate-800/50 group-data-[theme=glass]/theme:border-slate-700/50 group-data-[theme=glass]/theme:text-white group-data-[theme=glass]/theme:placeholder-slate-400
          group-data-[theme=dark]/theme:bg-[#2a3942] group-data-[theme=dark]/theme:border-transparent group-data-[theme=dark]/theme:text-white group-data-[theme=dark]/theme:placeholder-slate-400
          group-data-[theme=whatsapp]/theme:bg-[#ffffff] group-data-[theme=whatsapp]/theme:border-[#ffffff] group-data-[theme=whatsapp]/theme:text-[#111b21] group-data-[theme=whatsapp]/theme:placeholder-slate-500 bg-slate-800/50 border-slate-700/50"
          placeholder="Type your message..."
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`rounded-lg px-4 transition-colors duration-300 
          group-data-[theme=glass]/theme:bg-slate-800/50 group-data-[theme=glass]/theme:text-slate-400 group-data-[theme=glass]/theme:hover:text-slate-200
          group-data-[theme=dark]/theme:bg-[#2a3942] group-data-[theme=dark]/theme:text-slate-400 group-data-[theme=dark]/theme:hover:text-slate-200
          group-data-[theme=whatsapp]/theme:bg-transparent group-data-[theme=whatsapp]/theme:text-[#54656f] group-data-[theme=whatsapp]/theme:hover:text-[#111b21] bg-slate-800/50 text-slate-400 hover:text-slate-200 ${
            imagePreview ? "group-data-[theme=glass]/theme:text-cyan-500 group-data-[theme=dark]/theme:text-[#00a884] group-data-[theme=whatsapp]/theme:text-[#00a884] text-cyan-500" : ""
          }`}
        >
          <ImageIcon className="w-5 h-5" />
        </button>
        <button
          type="submit"
          disabled={!text.trim() && !imagePreview}
          className="rounded-lg px-4 py-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          group-data-[theme=glass]/theme:bg-gradient-to-r group-data-[theme=glass]/theme:from-cyan-500 group-data-[theme=glass]/theme:to-cyan-600 group-data-[theme=glass]/theme:hover:from-cyan-600 group-data-[theme=glass]/theme:hover:to-cyan-700 group-data-[theme=glass]/theme:text-white
          group-data-[theme=dark]/theme:bg-[#00a884] group-data-[theme=dark]/theme:hover:bg-[#008f6f] group-data-[theme=dark]/theme:text-white
          group-data-[theme=whatsapp]/theme:bg-[#00a884] group-data-[theme=whatsapp]/theme:hover:bg-[#008f6f] group-data-[theme=whatsapp]/theme:text-white bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
        >
          <SendIcon className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
export default MessageInput;