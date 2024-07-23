import React from "react";
import { useParams } from "react-router-dom";

import * as VideoStyled from "./OverlayControls.styles";

import { handleButtonAction } from "../../../utils";
import { useMessageDataStore } from "../../../dataStores";
import { buttonsArr } from "./buttonsArray";

interface IControlsProps {}

export const OverlayControls: React.FC<IControlsProps> = () => {
  const { uid: userId } = useParams();
  const { templateId } = useMessageDataStore(state => state);

  const handleAction = async (action: string, type: string = "gtkOverlayVideoPlayer") => {
    await handleButtonAction(templateId, userId as string, action, type);
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
            {typeof button.label === "string" ? button.label : <button.label />}
          </VideoStyled.ControlButton>
        ))}
      </VideoStyled.VideoButtonWrapper>
    </>
  );
};
