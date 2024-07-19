import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import { ChatMessage, StorageKeys } from "../../Types";

export interface IChatMessage {
  chatMessages: ChatMessage[];
  messageQueue: ChatMessage[];
  showSingleWordMessages: boolean;
  showTime: number;
  templateId: string;
  transition: string;

  addMessage: (message: ChatMessage) => void;
  addToQueue: (message: ChatMessage) => void;
  clearMessages: () => void;
  filteredChatMessages: () => ChatMessage[];
  removeFromQueue: (message: ChatMessage) => void;
  setShowTime: (showTime: number) => void;
  setTemplateId: (templateId: string) => void;
  setTransition: (transition: string) => void;
  toggleSingleWordMessages: () => void;
}

const useChatMessageDataStore = create(
  persist<IChatMessage>(
    (set: StoreApi<IChatMessage>["setState"], get: StoreApi<IChatMessage>["getState"]) => {
      return {
        chatMessages: [],
        messageQueue: [],
        showSingleWordMessages: true,
        showTime: 30000,
        templateId: "",
        transition: "default",

        addMessage: message => {
          const messages = structuredClone(get().chatMessages);
          messages.push(message);
          set({ chatMessages: messages });
        },

        clearMessages: () => {
          set({ chatMessages: [] });
        },

        toggleSingleWordMessages: () => {
          set({ showSingleWordMessages: !get().showSingleWordMessages });
        },

        setTransition: (transition: string) => {
          set({ transition });
        },

        setShowTime: (showTime: number) => {
          set({ showTime });
        },

        filteredChatMessages: () => {
          return get()?.showSingleWordMessages
            ? get()?.chatMessages
            : get()?.chatMessages.filter(str => str.msg.split(" ").length > 1);
        },

        addToQueue: (message: ChatMessage) => {
          const check = get().messageQueue.find(msg => msg._id === message._id);
          if (!check) set({ messageQueue: [...get().messageQueue, message] });
        },

        removeFromQueue: (message: ChatMessage) => {
          const newMessageQueue = get().messageQueue.filter(msg => msg._id !== message._id);
          set({ messageQueue: newMessageQueue });
        },

        setTemplateId: (templateId: string) => {
          set({ templateId });
        }
      };
    },
    {
      name: StorageKeys.CHAT_MESSAGE_STORAGE
    }
  )
);

export default useChatMessageDataStore;
