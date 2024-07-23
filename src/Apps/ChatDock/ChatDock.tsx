import React from "react";

import * as Styled from "./ChatDock.styles";
import { ControlCenterHeader } from "../../components/ControlCenterHeader/ControlCenterHeader";
import { ChatMessages } from "../../components/ChatMessages/ChatMessages";

export const ChatDock = () => {
  return (
    <Styled.ChatDockWrapper>
      <ControlCenterHeader origin="chatDock" />
      <ChatMessages />
    </Styled.ChatDockWrapper>
  );
};
