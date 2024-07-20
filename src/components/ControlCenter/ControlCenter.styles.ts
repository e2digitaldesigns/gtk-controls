import styled from "styled-components";

const controlWidth = "375px";

export const ControlCenterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #232323;

  display: grid;
  gap: 0.5rem;
  grid-template-rows: 36px 40px 1fr;
`;

export const ControlCenterGrid = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  gap: 0rem;
  display: grid;
  grid-template-columns: 500px 1fr ${controlWidth};
`;
