import React from "react";
import axios from "axios";
import { ChatMessage } from "../../Types";

const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/`;
const SOCKET_API_URL = `${BASE_API_URL}socket/manual/`;

type ButtonAction = (
  templateId: string,
  userId: string,
  action: string,
  type: string,
  data: Record<string, string | number>
) => Promise<void>;

type SendMessageToChat = (twitchUsername: string, data: string) => Promise<void>;

type VoteForChat = (
  templateId: string,
  userId: string,
  name: string,
  action: "like" | "dislike"
) => Promise<void>;

type ActionsHook = () => {
  buttonAction: ButtonAction;
  sendMessageToChat: SendMessageToChat;
  voteForChat: VoteForChat;
};

export const useActionsHook: ActionsHook = () => {
  const buttonAction = async (
    templateId: string,
    userId: string,
    action: string,
    type: string,
    data: Record<string, string | number>
  ) => {
    const link = `${SOCKET_API_URL}${type}?tid=${templateId}&uid=${userId}&action=${action}`;
    await axios.post(link, { ...data });
  };

  const sendMessageToChat: SendMessageToChat = async (twitchUsername: string, data: string) => {
    if (!data || !twitchUsername) {
      return;
    }

    await axios.post(`${process.env.REACT_APP_REST_API}/chatSender/sendMessage`, {
      channel: twitchUsername,
      message: data
    });
  };

  const voteForChat: VoteForChat = async (
    templateId: string,
    userId: string,
    name: string,
    action: "like" | "dislike"
  ) => {
    const localLink = `${SOCKET_API_URL}gtkChatVote?tid=${templateId}&uid=${userId}&action=vote`;

    await axios.post(localLink, { username: name, votes: action === "like" ? 1 : -1 });
  };

  return {
    buttonAction,
    sendMessageToChat,
    voteForChat
  };
};
