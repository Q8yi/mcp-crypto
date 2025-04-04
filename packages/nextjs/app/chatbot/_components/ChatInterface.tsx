"use client";

import { useState } from "react";
import { InputBase } from "~~/components/scaffold-eth";

/**
 * Generic Input component to handle input's based on their function param type
 */
const ChatInterface = () => {
  const [chatInput, setInput] = useState<string>("");

  const sendToLLM = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const message = chatInput.trim();
      console.log(message);
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="p-5 m-2 flex items-center flex-col">
        <div>{chatInput}</div>
        <InputBase name="chatbotInput" placeholder="Message" value={chatInput} onChange={setInput} />
      </div>
    </div>
  );
};
export default ChatInterface;
