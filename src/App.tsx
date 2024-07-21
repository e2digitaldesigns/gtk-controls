import React from "react";
import GlobalStyle from "./globalStyles";

import { AppRouter } from "./components/AppRouter/AppRouter";
import { getUserId } from "./utils";
import { ApplicationManager } from "./components/ApplicationManager/ApplicationManager";

function App() {
  const userId = getUserId();

  return userId ? (
    <>
      <GlobalStyle />
      <ApplicationManager />
      <AppRouter />
    </>
  ) : null;
}

export default App;
