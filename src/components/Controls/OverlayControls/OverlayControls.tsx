import React from "react";
import * as VideoStyled from "./OverlayControls.styles";
import { handleButtonAction, handleButtonActionHostVote, Icon } from "../../../utils";
import { buttonsArr, handleHostVoteArr } from "./buttonsArray";
import { useEpisode } from "../../../dataStores";

export const OverlayControls: React.FC = () => {
  const { hosts } = useEpisode(state => state);

  return (
    <>
      <VideoStyled.VideoButtonWrapper voteRows={hosts.length}>
        <VideoStyled.SectionDivider gridArea="divider-1">Video Controls</VideoStyled.SectionDivider>

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

        <VideoStyled.SectionDivider gridArea="divider-2">Host Voting</VideoStyled.SectionDivider>

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
