import styled from "styled-components";

const controlWidth = "375px";
const headerHeight = "2.25rem";
const subheaderHeight = "2.5rem";
const wrapperGap = "0.5rem";

export const ControlCenterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #232323;
  padding: 0.5rem;

  display: grid;
  gap: ${wrapperGap};
  grid-template-rows: ${headerHeight} ${subheaderHeight} 1fr;
`;

export const ControlCenterGrid = styled.div`
  width: 100%;
  height: calc(100vh - ${headerHeight} - ${subheaderHeight} - 2rem);
  gap: 0.5rem;
  display: grid;
  grid-template-columns: 500px 1fr ${controlWidth};
`;
