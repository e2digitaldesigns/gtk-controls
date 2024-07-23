import React from "react";

import socketServices from "../../services/socketServices";
import { getUserId } from "../../utils";
import { useMessageDataStore, useUserDataStore } from "../../dataStores";
import axios from "axios";
import { ChatMessage, ChatMessageReturn } from "../../Types";

export const AppManager: React.FC = () => {
  const userId = getUserId();
  const { addMessage, hydrateMessages } = useMessageDataStore(state => state);
  const { setUserData, userData } = useUserDataStore(state => state);

  //Set userId and twitchUsername
  React.useEffect(() => {
    const fetchUserTwitchUsername = async () => {
      if (!userId) return;

      const userInfo = { userId, twitchUsername: "" };

      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/twitch/twitchUsername/${userId}`
      );

      if (data.twitchUsername) userInfo.twitchUsername = data.twitchUsername;

      setUserData(userInfo);
    };

    fetchUserTwitchUsername();
  }, [setUserData, userId]);

  //Fetch messages
  React.useEffect(() => {
    if (!userData.userId) return;
    const fetchMessages = async () => {
      const { data } = await axios.get(
        process.env.REACT_APP_REST_API + `/chatlog/messages/${userData.userId}`
      );

      data && hydrateMessages(data.messages);
    };

    fetchMessages();
  }, [hydrateMessages, userData.userId]);

  //Subscribe to chat messages
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
