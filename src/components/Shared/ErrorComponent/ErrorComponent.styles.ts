import styled from "styled-components";

export const ChatDockWrapper = styled.div`
  width: 100vw;
  min-width: 250px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #232323;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  background-color: #b81c46;
  box-sizing: border-box;
  color: #ddd;
  font-weight: bold;
`;
