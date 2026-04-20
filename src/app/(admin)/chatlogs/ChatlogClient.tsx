"use client";
import React from "react";
import { ChatlogProvider } from "@/context/ChatlogContext";
import ConversationMenu from "@/components/ConversationMenu";
import ChatInterface from "@/components/ChatInterface";

export default function ChatlogClient() {
  return (
    <ChatlogProvider>
      <div className='flex h-full overflow-y-auto lg:overflow-y-clip md:overflow-y-clip lg:max-h-screen md:max-h-screen mt-16 w-full md:max-w-3xl md:mx-auto lg:max-w-6xl lg:mx-auto'>
        <ConversationMenu />
        <div className='flex-1 p-8 hidden md:inline-block lg:inline-block'>
          <ChatInterface />
        </div>
      </div>
    </ChatlogProvider>
  );
}
