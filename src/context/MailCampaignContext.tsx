"use client";
import React, { createContext, useContext, useState } from "react";

type Contact = { email: string };

interface MailCampaignContextType {
  contactList: Contact[];
  setContactList: (list: Contact[]) => void;
  subject: string;
  setSubject: (subject: string) => void;
}

const MailCampaignContext = createContext<MailCampaignContextType | null>(null);

export function MailCampaignProvider({ children }: { children: React.ReactNode }) {
  const [contactList, setContactList] = useState<Contact[]>([]);
  const [subject, setSubject] = useState("");

  return (
    <MailCampaignContext.Provider value={{ contactList, setContactList, subject, setSubject }}>
      {children}
    </MailCampaignContext.Provider>
  );
}

export function useMailCampaign() {
  const ctx = useContext(MailCampaignContext);
  if (!ctx) throw new Error("useMailCampaign must be used within MailCampaignProvider");
  return ctx;
}
