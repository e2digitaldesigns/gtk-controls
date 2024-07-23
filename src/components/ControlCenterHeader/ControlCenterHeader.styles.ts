import styled from "styled-components";
import { GlobalIconWrapper } from "../../globalStyles";

export const ControlCenterHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  background-color: ${props => props.theme.colors.accent1};
  box-sizing: border-box;
`;

export const IconWrapper = GlobalIconWrapper;

interface IPausedIconWrapper {
  isPaused: boolean;
}

export const PausedIconWrapper = styled(IconWrapper)<IPausedIconWrapper>`
  background-color: transparent;
  > svg {
    opacity: ${props => (props.isPaused ? 1 : 0.25)};
  }
`;
