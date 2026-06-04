"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const IconMessage = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M4 5h16v11H7l-3 3V5z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 1116 0"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");
  const messagesEndRef = useRef(null);

  const [chatHistory, setChatHistory] = useState([
    { type: "bot", text: "Hello! How can we help you today?" },
  ]);

  const sendChat = () => {
    if (!chatMsg.trim()) return;

    setChatHistory((prev) => [...prev, { type: "user", text: chatMsg }]);

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: "Thanks! Our team will reply soon." },
      ]);
    }, 700);

    setChatMsg("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, chatOpen]);

  return (
    <div className="fixed bottom-25 right-8 z-50 flex flex-col items-end">
      {/* CHAT BOX */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="
              w-[92vw] sm:w-80 md:w-96
              rounded-3xl
              border border-cyan-400/15
              bg-slate-950/80
              backdrop-blur-2xl
              shadow-[0_20px_80px_rgba(34,211,238,0.15)]
              overflow-hidden
              mb-4
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 p-4 border-b border-cyan-400/10 bg-slate-900/60">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-sky-500 flex items-center justify-center text-slate-950">
                <IconUser />
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  Proghive Support
                </span>

                <div className="flex items-center gap-2 text-xs text-cyan-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Online now
                </div>
              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="ml-auto text-slate-400 hover:text-cyan-300 transition"
              >
                <IconClose />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="p-4 space-y-3 max-h-72 overflow-y-auto">
              {chatHistory.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 rounded-2xl max-w-[80%] ${
                    m.type === "user"
                      ? "ml-auto bg-cyan-500 text-slate-950 font-medium"
                      : "bg-white/5 text-white border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}
            <div className="flex items-center gap-2 p-3 border-t border-cyan-400/10 bg-slate-900/40">
              <input
                type="text"
                placeholder="Type your message..."
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                className="
                  flex-1 px-3 py-2 rounded-xl
                  bg-white/5 border border-white/10
                  text-white placeholder:text-slate-400
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/40
                "
              />

              <button
                onClick={sendChat}
                className="
                  px-4 py-2 rounded-xl
                  bg-linear-to-r from-cyan-500 to-sky-500
                  text-slate-950 font-semibold
                  hover:scale-105 active:scale-95 transition
                "
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TOGGLE BUTTON */}
      <motion.button
        onClick={() => setChatOpen(!chatOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          w-14 h-14 rounded-full
          bg-linear-to-br from-cyan-500 to-sky-500
          text-slate-950
          shadow-[0_10px_40px_rgba(34,211,238,0.25)]
          flex items-center justify-center
        "
      >
        {chatOpen ? <IconClose /> : <IconMessage />}
      </motion.button>
    </div>
  );
}
