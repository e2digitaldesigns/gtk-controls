import React from "react";
import * as Styled from "./ControlsSettingsDrawer.style";

import { XCircle, ToggleLeft } from "react-feather";

interface IControlsSettingsDrawerProps {
  handleSettingsClose: () => void;
  isOpen: boolean;
}

export const ControlsSettingsDrawer: React.FC<IControlsSettingsDrawerProps> = ({
  handleSettingsClose,
  isOpen
}) => {
  return (
    <>
      <Styled.SettingsDrawerWrapper isOpen={isOpen}>
        <Styled.HeaderWrapperGrid>
          <XCircle onClick={handleSettingsClose} />
          <h3>Settings</h3>
        </Styled.HeaderWrapperGrid>

        <Styled.OptionsWrapperGridInner>
          <div>Setting 001</div>
          <div>
            <ToggleLeft />
          </div>
        </Styled.OptionsWrapperGridInner>
      </Styled.SettingsDrawerWrapper>
    </>
  );
};
