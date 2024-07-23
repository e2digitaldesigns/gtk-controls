import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ControlCenter } from "../../Apps/ControlCenter/ControlCenter";
import { ControlDock } from "../../Apps/ControlsDock/ControlDock";
import { ChatDock } from "../../Apps/ChatDock/ChatDock";
import VideoRequestDock from "../../Apps/VideoRequestDock/VideoRequestDock";
import { SettingDrawer } from "../SettingsDrawer/SettingsDrawer";

export const AppRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/controlCenter/:uid",
      element: <ControlCenter />
    },
    {
      path: "/controlDock/:uid",
      element: <ControlDock />
    },
    {
      path: "/chatDock/:uid",
      element: <ChatDock />
    },
    {
      path: "/videoRequestDock/:uid",
      element: <VideoRequestDock />
    }
  ]);

  return (
    <>
      <SettingDrawer />
      <RouterProvider router={router} />
    </>
  );
};
