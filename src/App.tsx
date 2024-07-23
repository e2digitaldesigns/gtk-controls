import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/GlobalTheme";

import { getUserId } from "./utils";
import { ApplicationManager } from "./Components/ApplicationManager/ApplicationManager";
import { AppRouter } from "./Components/AppRouter/AppRouter";

function App() {
  const userId = getUserId();

  return userId ? (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationManager />
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  ) : null;
}

export default App;
