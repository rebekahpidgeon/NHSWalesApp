import { useState } from "react";
import { Card, CardContent } from "..//components/ui/card";
import { Input } from "..//components/ui/input";
import { Button } from "..//components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Chatbot() {

  interface Message {
    text: string;
    type: 'user' | 'bot';
  }
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, type: "user" }]);

    const userInput = input;
    setInput("");


    const response = await fetch('/chatresponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: userInput })
    });

    const data = await response.text();

    setMessages((prev) => [...prev, { text: data, type: "bot" }]);
    // Simulating chatbot response

    // setTimeout(() => {
    //   setMessages((prev) => [...prev, { text: "This is a response from the 111 chatbot.", type: "bot" }]);
    // }, 1000);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <motion.h1
        className="text-2xl font-bold text-center text-blue-600 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        NHS 111 Chatbot
      </motion.h1>

      <Card className="flex-1 overflow-y-auto p-4 rounded-xl shadow-md bg-white">
        <CardContent className="space-y-3">
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

      <div className="mt-4 flex items-center gap-2">
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
  );
}