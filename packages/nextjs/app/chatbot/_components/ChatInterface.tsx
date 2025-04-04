"use client";

import React from "react";
import { useState } from "react";
import { InputBase } from "~~/components/scaffold-eth";

/**
 * Generic Input component to handle input's based on their function param type
 */
const ChatInterface = () => {
  const [chatInput, setInput] = useState<string>("");

  function sendToLLM() {
    if (chatInput !== "") {
      console.log(chatInput);
      // LLM call
    }
  }

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <div className="p-5 m-2 flex items-center flex-col">
        <div>{chatInput}</div>
        <div className={`flex border-2 border-base-300 bg-base-200 rounded-full text-accent`}>
          <form
            onSubmit={e => {
              e.preventDefault();
              sendToLLM();
            }}
          >
            <input
              id="chatinputs"
              className="input input-ghost focus-within:border-transparent focus:outline-none focus:bg-transparent h-[2.2rem] min-h-[2.2rem] px-4 border w-full font-medium placeholder:text-accent/70 text-base-content/70 focus:text-base-content/70"
              placeholder="Message"
              value={chatInput}
              onChange={e => setInput(e.target.value)}
              autoComplete="off"
            />
            <button id="chatBtn" value="Enter" className="flex-right">
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ChatInterface;
