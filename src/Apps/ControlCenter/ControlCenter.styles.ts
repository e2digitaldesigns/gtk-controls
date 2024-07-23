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
  gap: ${props => props.theme.sizes.wrapperGap};
  height: 100%;
  overflow: hidden;
  width: 100%;

  > div:nth-child(1) {
    width: ${props => props.theme.sizes.messageWdith};
  }

  > div:nth-child(2) {
    flex: 1;
  }

  > div:nth-child(3) {
    width: ${props => props.theme.sizes.controlWidth};
  }
`;
