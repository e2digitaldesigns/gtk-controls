import React from "react";

import * as Styled from "./SettingsDrawer.styles";
import { useMessageDataStore } from "../../dataStores";
import { Icon } from "../../utils";

const transitions = [
  { name: "Template Default", value: "" },
  { name: "Left to Right", value: "LeftToRight" },
  { name: "Rigth to Left", value: "RightToLeft" },
  { name: "Top to Bottom", value: "TopToBottom" },
  { name: "Bottom to Top", value: "BottomToTop" },
  { name: "Fade In", value: "FadeIn" },
  { name: "Scale In", value: "ScaleIn" }
];

export const SettingDrawer: React.FC = () => {
  const chatMessageData = useMessageDataStore(state => state);

  return (
    <>
      <Styled.SettingDrawerBacker isOpen={chatMessageData.isSettingsOpen} />
      <Styled.SettingDrawerWrapper isOpen={chatMessageData.isSettingsOpen}>
        <Styled.HeaderWrapperGrid>
          <Icon name="XCircle" onClick={chatMessageData.handleSettingsDrawerToggle} />
          <h3>Settings</h3>
        </Styled.HeaderWrapperGrid>

        <Styled.OptionsWrapperGridInner>
          <div>Show single word messages:</div>
          <div>
            {chatMessageData.showSingleWordMessages ? (
              <Icon name="ToggleRight" onClick={chatMessageData.toggleSingleWordMessages} />
            ) : (
              <Icon name="ToggleLeft" onClick={chatMessageData.toggleSingleWordMessages} />
            )}
          </div>
        </Styled.OptionsWrapperGridInner>

        <Styled.OptionsWrapperGridInner>
          <div>Transition:</div>
          <div>
            <select
              value={chatMessageData.transition}
              onChange={e => chatMessageData.setTransition(e.target.value)}
            >
              {transitions.map(transition => (
                <option key={transition.value} value={transition.value}>
                  {transition.name}
                </option>
              ))}
            </select>
          </div>
        </Styled.OptionsWrapperGridInner>
      </Styled.SettingDrawerWrapper>
    </>
  );
};
