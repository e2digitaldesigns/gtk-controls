import React from "react";
import { Settings, PauseCircle } from "react-feather";

import * as Styled from "./ControlCenterHeader.styles";
import { TemplateSelector } from "../Shared";
import { useMessageDataStore } from "../../dataStores";

interface ControlCenterHeaderProps {
  origin: string;
}

export const ControlCenterHeader: React.FC<ControlCenterHeaderProps> = ({ origin }) => {
  const chatMessageData = useMessageDataStore(state => state);

  return (
    <Styled.ControlCenterHeaderWrapper>
      <Styled.IconWrapper onClick={chatMessageData.handleSettingsDrawerToggle}>
        <Settings />
      </Styled.IconWrapper>

      <TemplateSelector origin={origin} />

      <Styled.PausedIconWrapper isPaused={true}>
        <PauseCircle />
      </Styled.PausedIconWrapper>
    </Styled.ControlCenterHeaderWrapper>
  );
};
