import styled from "styled-components";

export const ScrollerDivWrapper = styled.div`
  overflow-x: hidden !important;
  overflow-y: scroll !important;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #333;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3f3f3f;

    :hover {
      background-color: #4a4a4a;
    }
  }
`;
