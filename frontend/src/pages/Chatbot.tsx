import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import Footer, { ActiveTab } from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Chatbot() {
  interface Message {
    text: string;
    type: "user" | "bot";
  }
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, type: "user" }]);

    const userInput = input;
    setInput("");

    const response = await fetch("https://nhs-wales-app-werr.vercel.app/chatresponse", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: userInput }),
    });

    const chatbotResponse = await response.json();
    const data = chatbotResponse.answer;

    setMessages((prev) => [...prev, { text: data, type: "bot" }]);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      <Navbar title={"Chatbot"} />

      {/* Main Chat Container with padding for Footer */}
      <div className="flex flex-col flex-grow overflow-hidden pb-12">
        <Card className="flex h-[90%] flex-col overflow-hidden rounded-xl shadow-md bg-white mx-4">
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg max-w-xs ${msg.type === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-200 text-gray-900"}`}
              >
                {msg.text}
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <div className="absolute bottom-12 left-0 w-full bg-white shadow-md px-4 py-2 flex items-center gap-2">
          <Input
            className="flex-1 p-3 rounded-full"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={sendMessage} className="p-3 rounded-full">
            <Send size={20} />
          </Button>
        </div>
      </div>

      <Footer activeTab={ActiveTab.CHATBOT} className="absolute bottom-0 w-full h-12" />
    </div>
  );
}