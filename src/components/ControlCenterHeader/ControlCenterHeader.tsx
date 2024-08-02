import React from "react";

import * as Styled from "./ControlCenterHeader.styles";
import { TemplateSelector } from "../Shared";
import { useMessageDataStore } from "../../dataStores";
import { Icon } from "../../utils";

interface ControlCenterHeaderProps {
  origin: string;
}

export const ControlCenterHeader: React.FC<ControlCenterHeaderProps> = ({ origin }) => {
  const chatMessageData = useMessageDataStore(state => state);

  return (
    <Styled.ControlCenterHeaderWrapper>
      <Styled.IconWrapper onClick={chatMessageData.handleSettingsDrawerToggle}>
        <Icon name="Settings" />
      </Styled.IconWrapper>

      <TemplateSelector origin={origin} />

      <Styled.PausedIconWrapper isPaused={true}>
        <Icon name="PauseCircle" />
      </Styled.PausedIconWrapper>
    </Styled.ControlCenterHeaderWrapper>
  );
};
