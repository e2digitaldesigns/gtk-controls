import axios from "axios";
import { ChatMessage } from "../../Types";
import { getUser } from "../getUser";
import { getUserId } from "../getUserId";

const userId = getUserId();

export const chatVoteFn = async (action: "like" | "dislike", chatMsgId: string) => {
  await axios.post(`${process.env.REACT_APP_REST_API}/chatLikes/${userId}`, {
    chatMsgId,
    hostUsername: getUser() || "",
    action
  });
};

export const handleButtonAction = async (
  templateId: string,
  action: string,
  type: string,
  data: any = {}
) => {
  const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;
  const link = `${BASE_API_URL}?tid=${templateId}&uid=${userId}&action=${action}`;

  await axios.post(link, { ...data });
};

export const handleSendChatMessageNow = async (
  message: ChatMessage,
  showTime: number,
  transition: string
) => {
  await axios.post(`${process.env.REACT_APP_REST_API}/chatDisplay/sendToOverlay`, {
    _id: message._id,
    fontColor: message.fontColor.replace("#", "%23"),
    showTime,
    transition: transition === "default" ? null : transition,
    uid: userId
  });
};

export const handleSendQueuedChatMessage = async (
  messageQueue: ChatMessage[],
  showTime: number,
  transition: string,
  callback: (message: ChatMessage) => void
) => {
  const message = messageQueue?.[0];
  if (!message) return;

  await handleSendChatMessageNow(message, showTime, transition);
  callback(message);
};

export const handleHideChatMessage = async () => {
  await axios.post(`${process.env.REACT_APP_REST_API}/chatDisplay/hideChatMessage`, {
    uid: userId
  });
};

export const handleDeleteChatMessage = async (messageId: string) => {
  await axios.patch(process.env.REACT_APP_REST_API + `/chatRelay/${userId}/remove`, {
    userId,
    messageId
  });
};

export const sendMessageToChat = async (twitchUsername: string, data: string) => {
  if (!data || !twitchUsername) {
    return;
  }

  await axios.post(`${process.env.REACT_APP_REST_API}/chatSender/sendMessage`, {
    channel: twitchUsername,
    message: data
  });
};

export const handleResetChatterVotes = async () => {
  await axios.patch(`${process.env.REACT_APP_REST_API}/chatLikes/reset/${userId}`);
};

export const handleResetChatRank = async () => {
  await axios.patch(`${process.env.REACT_APP_REST_API}/chatRank/reset/${userId}`);
};
