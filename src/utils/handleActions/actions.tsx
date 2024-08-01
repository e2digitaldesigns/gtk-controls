import axios from "axios";
import { ChatMessage } from "../../Types";
import { getUser } from "../getUser";

const API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/gtkChatVote`;

export const chatVoteFn = async (
  templateId: string,
  userId: string,
  name: string,
  action: "like" | "dislike",
  twitchUsername: string
) => {
  const localLink = `${API_URL}?tid=${templateId}&uid=${userId}&action=vote`;
  await axios.post(localLink, { username: name, votes: action === "like" ? 1 : -1 });

  const hostName = getUser();

  if (hostName && twitchUsername) {
    sendMessageToChat(twitchUsername, `@${name}, ${hostName} has ${action}d your message`);
  }
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
  if (!data || !twitchUsername) {
    return;
  }

  await axios.post(`${process.env.REACT_APP_REST_API}/chatSender/sendMessage`, {
    channel: twitchUsername,
    message: data
  });
};
