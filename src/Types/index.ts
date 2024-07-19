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
  url: string;
  fontColor: string;
};

export enum StorageKeys {
  CHAT_MESSAGE_STORAGE = "@gtk/chatMessageStorage"
}
