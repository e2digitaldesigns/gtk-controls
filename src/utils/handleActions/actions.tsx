import axios from "axios";
import { ChatMessage } from "../../Types";
import { getUser } from "../getUser";

export const chatVoteFn = async (userId: string, action: "like" | "dislike", chatMsgId: string) => {
  await axios.post(`${process.env.REACT_APP_REST_API}/chatLikes/${userId}`, {
    chatMsgId,
    hostUsername: getUser() || "",
    action
  });
};

export const handleButtonAction = async (
  templateId: string,
  userId: string,
  action: string,
  type: string,
  data: any = {}
) => {
  const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;

  const link = `${BASE_API_URL}?tid=${templateId}&uid=${userId}&action=${action}`;

  await axios.post(link, { ...data });
};

export const handleSendChatMessageNow = async (
  templateId: string,
  userId: string,
  message: ChatMessage,
  showTime: number,
  transition: string
) => {
  await axios.post(`${process.env.REACT_APP_REST_API}/chatLog/sendMessageToOverlay`, {
    _id: message._id,
    fontColor: message.fontColor.replace("#", "%23"),
    showTime,
    tid: templateId,
    transition: transition === "default" ? null : transition,
    uid: userId
  });
};

export const handleSendQueuedChatMessage = async (
  templateId: string,
  userId: string,
  messageQueue: ChatMessage[],
  showTime: number,
  transition: string,
  callback: (message: ChatMessage) => void
) => {
  const message = messageQueue?.[0];
  if (!message) return;

  await handleSendChatMessageNow(templateId, userId, message, showTime, transition);
  callback(message);
};

export const handleHideChatMessage = async (templateId: string, userId: string) => {
  const action = "hideChatMessage";
  const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/gtkChatDisplay`;
  const localLink = `${BASE_API_URL}?tid=${templateId}&uid=${userId}&action=${action}`;
  await axios.get(localLink);
};

export const handleDeleteChatMessage = async (
  templateId: string,
  userId: string,
  messageId: string
) => {
  await axios.patch(process.env.REACT_APP_REST_API + `/chatlog/messages/${userId}/remove`, {
    templateId,
    userId,
    messageId
  });
};

export const sendMessageToChat = async (twitchUsername: string, data: string) => {
  console.log("sendMessageToChat", twitchUsername, data);
  if (!data || !twitchUsername) {
    return;
  }

  await axios.post(`${process.env.REACT_APP_REST_API}/chatSender/sendMessage`, {
    channel: twitchUsername,
    message: data
  });
};
