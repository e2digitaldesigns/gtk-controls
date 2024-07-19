import React from "react";
import GlobalStyle from "./globalStyles";

import { AppRouter } from "./components/AppRouter/AppRouter";
import { getUserId } from "./utils";
import axios from "axios";
import { ChatManager } from "./components/ChatManager/ChatManager";

function App() {
  const [twitchUsername, setTwitchUsername] = React.useState<string>("");

  React.useEffect(() => {
    const fetchUserTwitchUsername = async () => {
      const userId = getUserId();
      if (!userId) return;

      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/twitch/twitchUsername/${userId}`
      );

      data.twitchUsername && setTwitchUsername(data.twitchUsername);
    };

    fetchUserTwitchUsername();
  }, []);

  return (
    <>
      <GlobalStyle />
      <ChatManager twitchUsername={twitchUsername} />
      <AppRouter twitchUsername={twitchUsername} />
    </>
  );
}

export default App;
