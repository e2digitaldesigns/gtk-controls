import React from "react";
import { Settings, PauseCircle } from "react-feather";

import * as Styled from "./CCHeader.styles";
import { TemplateSelector } from "../../Shared";

interface ControlCenterHeaderProps {
  setIsSettingsOpen: (value: boolean) => void;
}

export const ControlCenterHeader: React.FC<ControlCenterHeaderProps> = ({ setIsSettingsOpen }) => {
  return (
    <Styled.SelectWrapper>
      <Styled.IconWrapper onClick={() => setIsSettingsOpen(true)}>
        <Settings />
      </Styled.IconWrapper>

      <TemplateSelector origin="controlCenter" />

      <Styled.PausedIconWrapper isPaused={true}>
        {" "}
        <PauseCircle />{" "}
      </Styled.PausedIconWrapper>
    </Styled.SelectWrapper>
  );
};
