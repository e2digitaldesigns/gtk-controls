import React from "react";
import * as VideoStyled from "./OverlayControls.styles";
import { handleButtonAction, handleButtonActionHostVote, Icon } from "../../../utils";
import { buttonsArr, hostVoteButtonArray } from "./buttonsArray";

interface IControlsProps {}

export const OverlayControls: React.FC<IControlsProps> = () => {
  return (
    <>
      <VideoStyled.VideoButtonWrapper>
        {buttonsArr.map((button, index) => (
          <VideoStyled.ControlButton
            key={index}
            gridArea={button.gridArea}
            onClick={() =>
              button.action && handleButtonAction(button.socket as string, button.action)
            }
          >
            {button.icon ? <Icon name={button.icon as string} /> : button.label}
          </VideoStyled.ControlButton>
        ))}

        {hostVoteButtonArray.map((button, index) => (
          <VideoStyled.ControlButton
            key={index}
            gridArea={button.gridArea}
            onClick={() =>
              button.action && handleButtonActionHostVote(button.socket as string, button.action)
            }
          >
            {button.icon ? <Icon name={button.icon as string} /> : button.label}
          </VideoStyled.ControlButton>
        ))}
      </VideoStyled.VideoButtonWrapper>
    </>
  );
};
