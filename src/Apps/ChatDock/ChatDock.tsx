import React from "react";

import * as Styled from "./ChatDock.styles";
import { ControlCenterHeader } from "../../Components/ControlCenterHeader/ControlCenterHeader";
import { ChatMessages } from "../../Components/ChatMessages/ChatMessages";

export const ChatDock = () => {
  return (
    <Styled.ChatDockWrapper>
      <ControlCenterHeader origin="chatDock" />
      <ChatMessages />
    </Styled.ChatDockWrapper>
  );
};
