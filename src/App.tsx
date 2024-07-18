import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import ChatDock from "./components/ChatDock/ChatDock";
import Controls from "./components/Controls/Controls";
import VideoRequestDock from "./components/VideoRequestDock/VideoRequestDock";
import ChatVote from "./components/ChatVote/ChatVote";

function App() {
  const router = createBrowserRouter([
    {
      path: "/chatVote/:uid",
      element: <ChatVote />
    },
    {
      path: "/chatDock/:uid",
      element: <ChatDock />
    },
    {
      path: "/controlDock/:uid",
      element: <Controls />
    },
    {
      path: "/videoRequestDock/:uid",
      element: <VideoRequestDock />
    }
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
