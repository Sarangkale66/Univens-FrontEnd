import { useState } from "react";
import { Send, Smile } from "lucide-react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! How are you?", sender: "other", time: "10:30 AM" },
    { id: 2, text: "I'm good! How about you?", sender: "me", time: "10:32 AM" },
  ]);
  const [input, setInput] = useState("");
  const [recipient, setRecipient] = useState("UNIVENSE"); // 

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 border rounded-lg shadow-lg">
      <div className="p-4 text-black bg-gray-200 text-center font-semibold text-lg">
        {recipient}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[75%] text-white ${
                msg.sender === "me" ? "bg-green-500" : "bg-gray-500"
              }`}
            >
              <p>{msg.text}</p>
              <span className="block text-xs text-gray-200 text-right mt-1">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center p-2 bg-white border-t">
        <button className="p-2 text-gray-500">
          <Smile size={24} />
        </button>
        <input
          type="text"
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="p-2 text-blue-500" onClick={sendMessage}>
          <Send size={24} />
        </button>
      </div>
    </div>
  );
}
