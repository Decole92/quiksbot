"use client";
import React, { createContext, useContext, useState } from "react";

interface ChatlogContextType {
  selectedChatRoomId: string | null;
  setSelectedChatRoomId: (id: string | null) => void;
}

const ChatlogContext = createContext<ChatlogContextType | null>(null);

export function ChatlogProvider({ children }: { children: React.ReactNode }) {
  const [selectedChatRoomId, setSelectedChatRoomId] = useState<string | null>(null);

  return (
    <ChatlogContext.Provider value={{ selectedChatRoomId, setSelectedChatRoomId }}>
      {children}
    </ChatlogContext.Provider>
  );
}

export function useChatlog() {
  const ctx = useContext(ChatlogContext);
  if (!ctx) throw new Error("useChatlog must be used within ChatlogProvider");
  return ctx;
}
