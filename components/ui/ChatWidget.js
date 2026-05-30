"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ChatWidget() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState("");

  const [chatHistory, setChatHistory] = useState([
    { type: "bot", text: "Hello! How can we help you today?" },
  ]);

  const sendChat = () => {
    if (!chatMsg.trim()) return;

    // Add user message
    setChatHistory((prev) => [...prev, { type: "user", text: chatMsg }]);

    // Fake bot reply
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: "Thanks! Our team will reply soon." },
      ]);
    }, 800);

    setChatMsg("");
  };

  return (
    <div className="fixed bottom-30 right-6 z-50">
      {/* CHAT BOX */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="flex items-center gap-3 p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                JM
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-slate-900 dark:text-white">
                  Proghive Support
                </span>
                <span className="text-xs text-green-500">● Online now</span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
              {chatHistory.map((m, i) => (
                <div
                  key={i}
                  className={`text-sm px-3 py-2 rounded-xl w-fit max-w-[80%] ${
                    m.type === "user"
                      ? "bg-indigo-600 text-white ml-auto"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-slate-200 dark:border-slate-800">
              <input
                type="text"
                placeholder="Type a message…"
                value={chatMsg}
                onChange={(e) => setChatMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                className="flex-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />

              <button
                onClick={sendChat}
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium"
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
        className="w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-2xl shadow-xl flex items-center justify-center"
      >
        {chatOpen ? "✕" : "💬"}
      </motion.button>
    </div>
  );
}
