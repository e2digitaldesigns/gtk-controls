import React from "react";
import GlobalStyle from "./globalStyles";

import { AppRouter } from "./components/AppRouter/AppRouter";
import { getUserId } from "./utils";
import axios from "axios";
import { ChatManager } from "./components/ChatManager/ChatManager";

function App() {
  const [twitchUsername, setTwitchUsername] = React.useState<string>("");
  const userId = getUserId();

  React.useEffect(() => {
    const fetchUserTwitchUsername = async () => {
      if (!userId) return;

      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/twitch/twitchUsername/${userId}`
      );

      data.twitchUsername && setTwitchUsername(data.twitchUsername);
    };

    fetchUserTwitchUsername();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return userId ? (
    <>
      <GlobalStyle />
      <ChatManager twitchUsername={twitchUsername} userId={userId} />
      <AppRouter twitchUsername={twitchUsername} />
    </>
  ) : null;
}

export default App;
