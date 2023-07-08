import React from "react";
import * as Styled from "./ControlsSettingsDrawer.style";

import { XCircle, ToggleLeft, ToggleRight } from "react-feather";

interface IControlsSettingsDrawerProps {
  handleSettingsClose: () => void;
  isOpen: boolean;

  showVideoControls: boolean;
  handleShowVideoControls: () => void;
}

export const ControlsSettingsDrawer: React.FC<IControlsSettingsDrawerProps> = ({
  handleSettingsClose,
  isOpen,
  showVideoControls,
  handleShowVideoControls
}) => {
  return (
    <>
      <Styled.SettingsDrawerWrapper isOpen={isOpen}>
        <Styled.HeaderWrapperGrid>
          <XCircle onClick={handleSettingsClose} />
          <h3>Settings</h3>
        </Styled.HeaderWrapperGrid>

        <Styled.OptionsWrapperGridInner>
          <div>Show Video Controls</div>
          <div>
            {showVideoControls ? (
              <ToggleRight onClick={handleShowVideoControls} />
            ) : (
              <ToggleLeft onClick={handleShowVideoControls} />
            )}
          </div>
        </Styled.OptionsWrapperGridInner>
      </Styled.SettingsDrawerWrapper>
    </>
  );
};
