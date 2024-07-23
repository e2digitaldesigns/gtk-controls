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
    "video-seek-backward video-stop video-pause video-play video-play video-seek-forward"
    "toggle video-volume-mute video-volume-down video-volume-down video-volume-up video-volume-up"
    "video-size-small video-size-normal video-size-fullscreen video-size-custom-1 video-size-custom-2 video-size-custom-3";
  gap: 0.5rem;
`;

export const ControlButton = styled(Buttons)<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
`;

export const SeekBackward2 = styled(Buttons)`
  grid-area: seekB2;
`;

export const SeekBackward = styled(Buttons)`
  grid-area: seekB;
`;

export const Play = styled(Buttons)`
  grid-area: play;
`;

export const Pause = styled(Buttons)`
  grid-area: pause;
`;

export const SeekForward = styled(Buttons)`
  grid-area: seekF;
`;

export const SeekForward2 = styled(Buttons)`
  grid-area: seekF2;
`;

export const Stop = styled(Buttons)`
  grid-area: stop;
`;

export const VolumeUp = styled(Buttons)`
  grid-area: volumeUp;
`;

export const VolumeDown = styled(Buttons)`
  grid-area: volumeDown;
`;

export const Mute = styled(Buttons)`
  grid-area: mute;
`;

export const Toggle = styled(Buttons)`
  grid-area: toggle;
`;

export const Small = styled(Buttons)`
  grid-area: small;
`;

export const Normal = styled(Buttons)`
  grid-area: norm;
`;

export const Fullscreen = styled(Buttons)`
  grid-area: fullscreen;
`;

//  Custom Video Sizes

export const Custom1 = styled(Buttons)`
  grid-area: custom1;
`;

export const Custom2 = styled(Buttons)`
  grid-area: custom2;
`;

export const Custom3 = styled(Buttons)`
  grid-area: custom3;
`;
