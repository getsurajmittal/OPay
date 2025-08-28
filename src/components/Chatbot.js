"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/chatData";
import { getAnswer } from "@/utils/getAnswer";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // start minimized
  const [chatHeight, setChatHeight] = useState(50); // small height initially
  const chatEndRef = useRef(null);

  // Scroll to bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Adjust height dynamically when opened or on resize
  useEffect(() => {
    const updateHeight = () => {
      const maxHeight = window.innerHeight * 0.8; // 50% of window
      setChatHeight(isOpen ? maxHeight : 50); // small if minimized
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isOpen]);

  const sendMessage = () => {
    if (!input) return;
    const userMessage = { text: input, sender: "user" };
    const rawAnswer = getAnswer(input, resumeData);

    const formattedAnswer = rawAnswer.split("\n").map((line, i) => {
      const parts = line.split(/(https?:\/\/[^\s]+)/g);
      return (
        <div key={i}>
          {parts.map((part, j) =>
            /^https?:\/\//.test(part) ? (
              <a
                key={j}
                href={part}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800"
              >
                {part}
              </a>
            ) : (
              part
            )
          )}
        </div>
      );
    });

    const botMessage = { text: formattedAnswer, sender: "bot" };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div
      className="fixed bottom-4 right-4 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col z-50 transition-all duration-300"
      style={{ height: chatHeight }}
    >
      {/* Header */}
      <div className="bg-indigo-600 text-white p-1 font-bold text-center flex justify-between items-center cursor-pointer"
           onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Ask me about my skills, projects or experiences" : "Hi, let's chat"}
        <button
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          className="ml-2 text-white font-bold text-lg"
        >
          ✕
        </button>
      </div>

      {/* Chat Messages */}
      {isOpen && (
        <div className="flex-1 p-3 overflow-y-auto space-y-2">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-2 rounded-lg max-w-xs break-words ${
                msg.sender === "user"
                  ? "bg-indigo-200 text-indigo-900 self-end"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white self-start"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          <div ref={chatEndRef} />
        </div>
      )}

      {/* Input */}
      {isOpen && (
        <div className="flex p-2 border-t border-gray-300 dark:border-gray-600">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-2 py-1 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-indigo-600 text-white px-4 rounded-r-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}
