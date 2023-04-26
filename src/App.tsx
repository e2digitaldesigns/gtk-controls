import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import ChatDock from "./components/ChatDock/ChatDock";
import Controls from "./components/Controls/Controls";

function App() {
  const router = createBrowserRouter([
    {
      path: "/chatDock/:uid",
      element: <ChatDock />
    },
    {
      path: "/controlDock/:uid",
      element: <Controls />
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
