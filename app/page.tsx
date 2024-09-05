"use client";

import React, { useEffect, useState } from "react";
import { useChat } from "ai/react";
import Chat from "@/components/Chat";
import Navbar from "@/components/navbar";

const Page: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit: chatHandleSubmit } = useChat({
    api: "/api/chat",
    keepLastMessageOnError: true,
  });
  const [context, setContext] = useState<string[]>([]);

  useEffect(() => {
    const getContext = async () => {
      const response = await fetch("/api/context", {
        method: "POST",
        body: JSON.stringify({
          messages,
        }),
      });
      const { context } = await response.json();
      setContext(context.map((c: any) => c.id));
    };

    if (messages.length > 0) {
      getContext();
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await chatHandleSubmit(e);
  };

  return (
    <div className="flex h-screen bg-primary-bg">
      <Navbar />
      <main className="flex-1 flex flex-col p-4">
        <h1 className="text-2xl text-primary-text mb-4">Chat Interface</h1>
        <Chat
          input={input}
          handleInputChange={handleInputChange}
          handleMessageSubmit={handleSubmit}
          messages={messages}
          context={context}
        />
      </main>
    </div>
  );
};

export default Page;