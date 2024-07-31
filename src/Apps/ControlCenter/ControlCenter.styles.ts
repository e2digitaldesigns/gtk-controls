import styled from "styled-components";

export const ControlCenterWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: ${props => props.theme.sizes.wrapperGap};
  grid-template-rows: ${props => props.theme.sizes.headerHeight} 1fr;
  overflow: hidden;
  margin: ${props => props.theme.sizes.wrapperGap};
`;

export const ControlCenterGrid = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.sizes.wrapperGap};
  overflow-x: auto;
  padding-bottom: ${props => props.theme.sizes.wrapperGap};
  width: 100%;

  > div {
    flex-shrink: 0;
    scroll-snap-align: start;
    min-height: 100%;
    background-color: ${props => props.theme.colors.background};
  }
`;
