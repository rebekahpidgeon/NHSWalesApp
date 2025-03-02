import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import Footer, { ActiveTab } from "../components/Footer/Footer";

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
      mode: "no-cors",
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
    <div className="relative flex flex-col h-screen bg-gray-100 pb-12">
      <div className="p-4 flex flex-col h-full">
        <motion.h1
          className="text-2xl font-bold text-center text-blue-600 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          NHS 111 Chatbot
        </motion.h1>

        <Card className="flex flex-col flex-grow overflow-hidden rounded-xl shadow-md bg-white">
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

        <div className="mt-4 flex items-center gap-2 p-4 bg-white shadow-md sticky bottom-0 w-full rounded-b-xl">
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
      <Footer activeTab={ActiveTab.CHATBOT} />
    </div>
  );
}
