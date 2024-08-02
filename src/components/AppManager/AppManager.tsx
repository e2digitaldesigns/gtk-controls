import React from "react";

import { getUserId } from "../../utils";
import { useUserDataStore } from "../../dataStores";
import axios from "axios";
import { AppManagerChatMessaging } from "./ChatMessaging/ChatMessaging";
import { AppManagerChatRanks } from "./ChatRanks/ChatRanks";
import { AppManagerChatterVotes } from "./ChatterVotes/ChatterVotes";

export const AppManager: React.FC = () => {
  const userId = getUserId();
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

  const isAppReady = userId && userData.twitchUsername;

  return isAppReady ? (
    <>
      <AppManagerChatMessaging />
      <AppManagerChatRanks />
      <AppManagerChatterVotes />
    </>
  ) : null;
};
