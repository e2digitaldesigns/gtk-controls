import React from "react";
import * as Styled from "./SettingsDrawer.style";

import { XCircle, ToggleLeft, ToggleRight } from "react-feather";
import { useMessageDataStore } from "../../../dataStores";

interface SettingsDrawerProps {
  handleSettingsClose: () => void;
  isOpen: boolean;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ handleSettingsClose, isOpen }) => {
  const chatMessageData = useMessageDataStore(state => state);

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
            {chatMessageData.showSingleWordMessages ? (
              <ToggleRight onClick={chatMessageData.toggleSingleWordMessages} />
            ) : (
              <ToggleLeft onClick={chatMessageData.toggleSingleWordMessages} />
            )}
          </div>
        </Styled.OptionsWrapperGridInner>

        <Styled.OptionsWrapperGridInner>
          <div>Clear Chat</div>
          <div>
            <button onClick={chatMessageData.clearMessages}>Clear</button>
          </div>
        </Styled.OptionsWrapperGridInner>
      </Styled.SettingsDrawerWrapper>
    </>
  );
};
