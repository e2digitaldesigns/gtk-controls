import styled from "styled-components";
import { GlobalIconWrapper, globalSelectorWrapper } from "../../globalStyles";

export const ChatQueueWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.accent1};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  height: 3rem;
  flex-shrink: 0;
  width: 400px;
`;

export const IconWrapper = GlobalIconWrapper;

export const TimeSelectorWrapper = styled(globalSelectorWrapper)`
  background-color: ${props => props.theme.colors.accent1};
`;
