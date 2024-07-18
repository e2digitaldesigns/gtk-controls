import React from "react";
import * as Styled from "./SettingsDrawer.style";

import { XCircle, ToggleLeft, ToggleRight } from "react-feather";

interface SettingsDrawerProps {
  handleClearChat: () => void;
  handleSettingsClose: () => void;
  isOpen: boolean;

  showSingleWordMessages: boolean;
  handleSingleWordMessage: () => void;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
  handleClearChat,
  handleSettingsClose,
  isOpen,
  showSingleWordMessages,
  handleSingleWordMessage
}) => {
  return (
    <>
      <Styled.SettingsDrawerWrapper isOpen={isOpen}>
        <Styled.HeaderWrapperGrid>
          <XCircle onClick={handleSettingsClose} />
          <h3>Settings</h3>
        </Styled.HeaderWrapperGrid>

        <Styled.OptionsWrapperGridInner>
          <div>Show single word messages:</div>
          <div>
            {showSingleWordMessages ? (
              <ToggleRight onClick={handleSingleWordMessage} />
            ) : (
              <ToggleLeft onClick={handleSingleWordMessage} />
            )}
          </div>
        </Styled.OptionsWrapperGridInner>

        <Styled.OptionsWrapperGridInner>
          <div>Clear Chat</div>
          <div>
            <button onClick={handleClearChat}>Clear</button>
          </div>
        </Styled.OptionsWrapperGridInner>
      </Styled.SettingsDrawerWrapper>
    </>
  );
};
