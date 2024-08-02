import React from "react";

import * as VideoStyled from "./OverlayControls.styles";

import { handleButtonAction, Icon } from "../../../utils";
import { useMessageDataStore } from "../../../dataStores";
import { buttonsArr } from "./buttonsArray";

interface IControlsProps {}

export const OverlayControls: React.FC<IControlsProps> = () => {
  const { templateId } = useMessageDataStore(state => state);

  const handleAction = async (action: string, type: string = "gtkOverlayVideoPlayer") => {
    await handleButtonAction(templateId, action, type);
  };

  return (
    <>
      <VideoStyled.VideoButtonWrapper>
        {buttonsArr.map((button, index) => (
          <VideoStyled.ControlButton
            key={index}
            gridArea={button.gridArea}
            onClick={() => button.action && handleAction(button.action, button.type)}
          >
            {button.label ? button.label : <Icon name={button.icon as string} />}
          </VideoStyled.ControlButton>
        ))}
      </VideoStyled.VideoButtonWrapper>
    </>
  );
};
