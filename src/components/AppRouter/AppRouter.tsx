import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatVote from "../ChatVote/ChatVote";
import ChatDock from "../ChatDock/ChatDock";
import ControlsDock from "../Controls/Controls";
import VideoRequestDock from "../VideoRequestDock/VideoRequestDock";
import { ControlCenter } from "../ControlCenter/ControlCenter";

interface AppRouterProps {
  twitchUsername: string;
}

export const AppRouter: React.FC<AppRouterProps> = ({ twitchUsername }) => {
  const router = createBrowserRouter([
    {
      path: "/controlCenter/:uid",
      element: <ControlCenter twitchUsername={twitchUsername} />
    },
    {
      path: "/chatVote/:uid",
      element: <ChatVote twitchUsername={twitchUsername} />
    },
    {
      path: "/chatDock/:uid",
      element: <ChatDock twitchUsername={twitchUsername} />
    },
    {
      path: "/controlDock/:uid",
      element: <ControlsDock />
    },
    {
      path: "/videoRequestDock/:uid",
      element: <VideoRequestDock />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
