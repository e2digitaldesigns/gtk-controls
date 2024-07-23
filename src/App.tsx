import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/GlobalTheme";

import { AppRouter } from "./Components/AppRouter/AppRouter";
import { getUserId } from "./utils";
import { ApplicationManager } from "./Components/ApplicationManager/ApplicationManager";

function App() {
  const userId = getUserId();

  return userId ? (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApplicationManager />
        <AppRouter />
      </ThemeProvider>
    </>
  ) : null;
}

export default App;
