import styled from "styled-components";

export const ScrollerDivWrapper = styled.div`
  overflow-x: hidden !important;
  overflow-y: scroll !important;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0.625rem;
    height: 0.625rem;
    background-color: #424242;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #686868;

    :hover {
      background-color: #888;
    }
  }
`;
