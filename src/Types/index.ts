export * from "./Episode";
export * from "./SocketServices";

export enum GtkBroadcastChannels {
  GTK_TEMPLATE = "gtk-overlay-templateId"
}

export type ChatMessageReturn = {
  _id: string;
  broadcasterName: string;
  name: string;
  msg: string;
  msgEmotes: string;
  url: string;
  fontColor: string;
  emotes: string[];
};

export type ChatMessage = {
  _id: string;
  broadcasterName: string;
  name: string;
  msg: string;
  msgEmotes: string;
  url: string;
  fontColor: string;
};

export enum StorageKeys {
  CHAT_MESSAGE_STORAGE = "@gtk/chatMessageStorage"
}

export type ChatRanks = {
  _id: string;
  username: string;
  image: string;
  messageCount: number;
};

export type ChatRankReturn = {
  action: string;
  uid: string;
  tid: string;
  messages: ChatRanks[];
};
