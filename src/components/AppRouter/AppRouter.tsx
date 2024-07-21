import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatVote from "../ChatVote/ChatVote";
import ChatDock from "../ChatDock/ChatDock";
import ControlsDock from "../Controls/Controls";
import VideoRequestDock from "../VideoRequestDock/VideoRequestDock";
import { ControlCenter } from "../ControlCenter/ControlCenter";

interface AppRouterProps {}

export const AppRouter: React.FC<AppRouterProps> = () => {
  const router = createBrowserRouter([
    {
      path: "/controlCenter/:uid",
      element: <ControlCenter />
    },
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
