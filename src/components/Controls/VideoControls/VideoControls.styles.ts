import styled from "styled-components";
import { Buttons } from "../Controls.styles";

export const VideoButtonWrapper = styled.div`
  display: grid;
  grid-template:
    "seekB stop pause play play  seekF"
    "toggle mute volumeDown volumeDown volumeUp volumeUp"
    "small norm fullscreen custom1 custom2 custom3";
  gap: 0.5rem;
  /* margin: 0.5rem; */
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
