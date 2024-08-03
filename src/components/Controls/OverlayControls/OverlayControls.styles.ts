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
  > svg {
    width: 1rem;
  }

  :hover {
    color: ${props => props.theme.colors.textActive};
    cursor: pointer;
    filter: brightness(1.75);
  }
`;

export const VideoButtonWrapper = styled.div<{ voteRows: number }>`
  display: grid;
  grid-template:
    "topic-prev topic-prev topic-prev topic-next topic-next topic-next"
    "timer-pause timer-pause timer-pause timer-resume timer-resume timer-resume"
    "overlay-reset overlay-reset overlay-reset blank blank blank"
    "divider-1 divider-1 divider-1 divider-1 divider-1 divider-1"
    "video-seek-backward video-stop video-pause video-play video-play video-seek-forward"
    "video-show-hide video-volume-mute video-volume-down video-volume-down video-volume-up video-volume-up"
    "video-size-small video-size-normal video-size-fullscreen video-size-custom-1 video-size-custom-2 video-size-custom-3"
    "divider-2 divider-2 divider-2 divider-2 divider-2 divider-2"
    ${props => {
      let rows = "";
      for (let i = 1; i <= props.voteRows; i++) {
        rows += `"vote-${i}-1 vote-${i}-1 vote-${i}-2 vote-${i}-3 vote-${i}-4 vote-${i}-5" `;
      }
      return rows;
    }}
    "clear-host-votes clear-host-votes clear-host-votes clear-topic-votes clear-topic-votes clear-topic-votes";
  gap: 0.5rem;
`;

export const ControlButton = styled(Buttons)<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
`;

export const SectionDivider = styled.div<{ gridArea: string }>`
  grid-area: ${props => props.gridArea};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.text};
  font-size: 0.875rem;
  background-color: ${props => props.theme.colors.button};
  padding: 0.25rem;
`;
