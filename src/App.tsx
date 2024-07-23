import React from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/GlobalTheme";

import { getUserId } from "./utils";
import { AppManager } from "./components/AppManager/AppManager";
import { AppRouter } from "./components/AppRouter/AppRouter";

function App() {
  const userId = getUserId();

  return userId ? (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppManager />
        <AppRouter />
      </ThemeProvider>
    </>
  ) : null;
}

export default App;
