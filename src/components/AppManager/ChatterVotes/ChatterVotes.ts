import React from "react";

import socketServices from "../../../services/socketServices";
import { useMessageDataStore, useUserDataStore } from "../../../dataStores";
import axios from "axios";

export const AppManagerChatterVotes: React.FC = () => {
  const { hydrateChatterVotes } = useMessageDataStore(state => state);
  const { userData } = useUserDataStore(state => state);

  React.useEffect(() => {
    if (!userData.userId) return;
    const fetchMessages = async (): Promise<void> => {
      const { data } = await axios.get(
        process.env.REACT_APP_REST_API + `/chatLikes/${userData.userId}`
      );

      data && hydrateChatterVotes(data);
    };

    fetchMessages();
  }, [hydrateChatterVotes, userData.userId]);

  React.useEffect(() => {
    socketServices.subscribeOverlaysChatterVotes((err: unknown, data: any) => {
      if (userData.userId !== data.uid) return;

      switch (data.action) {
        case "logChatterVote":
          hydrateChatterVotes(data.data);
          break;

        case "clearChatterVotes":
          hydrateChatterVotes([]);
          break;
      }
    });

    return () => {
      socketServices.unSubscribeOverlaysChatterVotes();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.twitchUsername]);

  return null;
};
