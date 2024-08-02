import React from "react";

import socketServices from "../../../services/socketServices";
import { useMessageDataStore, useUserDataStore } from "../../../dataStores";
import axios from "axios";
import { ChatMessage, ChatMessageReturn } from "../../../Types";

export const AppManagerChatMessaging: React.FC = () => {
  const { addMessage, hydrateMessages } = useMessageDataStore(state => state);
  const { userData } = useUserDataStore(state => state);

  React.useEffect(() => {
    if (!userData.userId) return;
    const fetchMessages = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_REST_API + `/chatRelay/${userData.userId}`
      );

      data && hydrateMessages(data.messages);
    };

    fetchMessages();
  }, [hydrateMessages, userData.userId]);

  React.useEffect(() => {
    let isMounted = true;

    socketServices.subscribeApplicationActions((err: unknown, data: ChatMessageReturn) => {
      if (data.broadcasterName !== userData.twitchUsername.toLowerCase()) return;

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
  }, [userData.twitchUsername]);

  return null;
};
