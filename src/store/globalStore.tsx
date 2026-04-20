import { create } from "zustand";
import { Contact } from "../../typing";

interface UIState {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;

  isExtended: boolean;
  setIsExtended: (v: boolean) => void;

  feedback: boolean;
  setFeedback: (v: boolean) => void;

  subject: string;
  setSubject: (v: string) => void;

  userPosition: { lat: number | null; lng: number | null };
  setUserPosition: (pos: { lat: number; lng: number }) => void;

  position: { lat: string; lng: string; address: string };
  setPosition: (pos: { lat: string; lng: string; address: string }) => void;

  // Shared UI coordination state
  selectedChatRoomId: string | null;
  setSelectedChatRoomId: (id: string | null) => void;

  chatId: string;
  setChatId: (id: string) => void;

  contactList: Contact[];
  setContactList: (contactList: Contact[]) => void;
}

export const useGlobalStore = create<UIState>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),

  isExtended: false,
  setIsExtended: (isExtended) => set({ isExtended }),

  feedback: false,
  setFeedback: (feedback) => set({ feedback }),

  subject: "",
  setSubject: (subject) => set({ subject }),

  userPosition: { lat: null, lng: null },
  setUserPosition: (userPosition) => set({ userPosition }),

  position: { lat: "", lng: "", address: "" },
  setPosition: (position) => set({ position }),

  selectedChatRoomId: null,
  setSelectedChatRoomId: (id) => set({ selectedChatRoomId: id }),

  chatId: "",
  setChatId: (chatId) => set({ chatId }),

  contactList: [],
  setContactList: (contactList) => set({ contactList }),
}));
