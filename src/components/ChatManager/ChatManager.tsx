import React from "react";
import socketServices from "../../services/socketServices";
import { ChatMessage, ChatMessageReturn } from "../../Types";
import { useMessageDataStore } from "../../dataStores";
import axios from "axios";
import { getUserId } from "../../utils";

interface IChatManagerProps {
  twitchUsername: string;
  userId: string;
}

export const ChatManager: React.FC<IChatManagerProps> = ({ twitchUsername }) => {
  const userId = getUserId();
  const { addMessage, hydrateMessages } = useMessageDataStore(state => state);

  React.useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_REST_API + `/chatlog/messages/${userId}`
      );

      data && hydrateMessages(data.messages);
    };

    fetchMessages();
  }, [hydrateMessages, userId]);

  React.useEffect(() => {
    let isMounted = true;

    socketServices.subscribeApplicationActions((err: unknown, data: ChatMessageReturn) => {
      if (data.broadcasterName !== twitchUsername.toLowerCase()) return;

      const messenger: ChatMessage = {
        _id: data._id,
        broadcasterName: data.broadcasterName,
        name: data.name,
        msg: data.msg,
        msgEmotes: data.msgEmotes,
        url: data.url,
        fontColor: data.fontColor
      };

      isMounted && addMessage(messenger);
    });

    return () => {
      isMounted = false;
      socketServices.unSubscribeApplicationActions();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitchUsername]);

  return null;
};
