import React from "react";

import socketServices from "../../../services/socketServices";
import { getUserId } from "../../../utils";
import { useMessageDataStore, useUserDataStore } from "../../../dataStores";
import axios from "axios";

export const AppManagerChatRanks: React.FC = () => {
  const userId = getUserId();
  const { updateChatRanks } = useMessageDataStore(state => state);
  const { userData } = useUserDataStore(state => state);

  React.useEffect(() => {
    if (!userData.userId) return;
    const fetchMessages = async (): Promise<void> => {
      const { data } = await axios.get(
        process.env.REACT_APP_REST_API + `/chatlog/${userData.userId}`
      );

      data && updateChatRanks(data);
    };

    fetchMessages();
  }, [updateChatRanks, userData.userId]);

  React.useEffect(() => {
    let isMounted = true;

    socketServices.subscribeOverlaysChatRanks((err: unknown, data: any) => {
      if (userId !== data.uid) return;
      isMounted && updateChatRanks(data.messages);
    });

    return () => {
      isMounted = false;
      socketServices.unSubscribeOverlaysChatRanks();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.twitchUsername]);

  return null;
};
