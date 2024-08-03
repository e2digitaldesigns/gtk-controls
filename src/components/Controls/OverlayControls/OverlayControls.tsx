import React from "react";
import * as VideoStyled from "./OverlayControls.styles";
import { handleButtonAction, handleButtonActionHostVote, Icon } from "../../../utils";
import { buttonsArr, handleHostVoteArr } from "./buttonsArray";
import { useEpisode } from "../../../dataStores";

export const OverlayControls: React.FC = () => {
  const { hosts } = useEpisode(state => state);

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

        {handleHostVoteArr(hosts).map((button, index) => (
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
