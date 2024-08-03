import styled from "styled-components";

export const Buttons = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.text};
  display: flex;
  font-size: 0.875rem;
  height: 2.75rem;
  justify-content: center;
  transition: 0.25s;

  :hover {
    color: ${props => props.theme.colors.textActive};
    cursor: pointer;
    filter: brightness(1.75);
  }
`;

export const VideoButtonWrapper = styled.div`
  display: grid;
  grid-template:
    "topic-prev topic-prev topic-prev topic-next topic-next topic-next"
    "timer-pause timer-pause timer-pause timer-resume timer-resume timer-resume"
    "overlay-reset overlay-reset overlay-reset blank blank blank"
    "clear-host-votes clear-host-votes clear-host-votes clear-topic-votes clear-topic-votes clear-topic-votes"
    "div-1 div-1 div-1 div-1 div-1 div-1"
    "video-seek-backward video-stop video-pause video-play video-play video-seek-forward"
    "video-show-hide video-volume-mute video-volume-down video-volume-down video-volume-up video-volume-up"
    "video-size-small video-size-normal video-size-fullscreen video-size-custom-1 video-size-custom-2 video-size-custom-3"
    "div-2 div-2 div-2 div-2 div-2 div-2"
    "vote-1-1 vote-1-1 vote-1-2 vote-1-3 vote-1-4 vote-1-5"
    "vote-2-1 vote-2-1 vote-2-2 vote-2-3 vote-2-4 vote-2-5"
    "vote-3-1 vote-3-1 vote-3-2 vote-3-3 vote-3-4 vote-3-5"
    "vote-4-1 vote-4-1 vote-4-2 vote-4-3 vote-4-4 vote-4-5";
  gap: 0.5rem;
`;

export const ControlButton = styled(Buttons)<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
`;
