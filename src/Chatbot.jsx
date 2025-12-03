import React, { useState, useRef } from "react";
import { GoogleGenAI } from "@google/genai";

const Chatbot = ({
  logo = "💬",
  primaryColor = "#4CAF50",
  variant = "shadow",
  position = "bottom-right",
  titleText = "Website Assistant",
  userAvatar = "🧑",
  botAvatar = "🤖",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋, how can I help you?", time: new Date() },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
  });
  const model = import.meta.env.VITE_GEMINI_MODEL;
  const systemInstruction = import.meta.env.VITE_GEMINI_PROMPT;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input, time: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await ai.models.generateContent({
        model,
        contents: input,
        config: { systemInstruction },
      });

      const botReply = response?.text || "Sorry, I couldn't understand.";
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: botReply, time: new Date() },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error connecting to Gemini API.", time: new Date() },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    middle: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4",
  };

  const variantClasses = {
    rounded: "rounded-xl",
    minimal: "border border-gray-300",
    shadow: "shadow-xl",
  };

  const formatTime = (date) =>
    `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

  return (
    <div className={`fixed z-50 ${positionClasses[position]}`}>
      {/* Floating Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center rounded-full cursor-pointer text-white text-2xl overflow-hidden"
        style={{ backgroundColor: primaryColor }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {typeof logo === "string" && (logo.startsWith("http") || logo.startsWith("/")) ? (
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        ) : (
          logo
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`mt-2 w-80 h-[500px] flex flex-col bg-white ${variantClasses[variant]} overflow-hidden`}
        >
          {/* Header */}
          <div
            className="p-3 text-white font-bold text-center"
            style={{ backgroundColor: primaryColor }}
          >
            {titleText}
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end ${
                  msg.sender === "user" ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="text-xl">
                  {msg.sender === "user" ? userAvatar : botAvatar}
                </div>
                <div
                  className={`ml-2 mr-2 max-w-[70%] p-2 rounded-lg text-sm relative ${
                    msg.sender === "user"
                      ? "bg-gray-200 text-left"
                      : "bg-blue-100 text-right"
                  }`}
                >
                  <div>{msg.text}</div>
                  <div className="text-[10px] text-gray-500 text-right mt-1">
                    {formatTime(msg.time)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200 p-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 p-2 text-sm outline-none border rounded-md"
            />
            <button
              onClick={sendMessage}
              className="ml-2 px-4 text-white text-sm rounded-md"
              style={{ backgroundColor: primaryColor }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;