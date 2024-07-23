import styled from "styled-components";
import { GlobalIconWrapper, globalSelectorWrapper } from "../../globalStyles";

export const OptionWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.accent1};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  height: 2.5rem;
`;

export const IconWrapper = GlobalIconWrapper;

export const TimeSelectorWrapper = styled(globalSelectorWrapper)`
  background-color: ${props => props.theme.colors.accent1};
`;
