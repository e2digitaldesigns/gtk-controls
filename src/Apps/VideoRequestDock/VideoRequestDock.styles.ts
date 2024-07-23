import styled from "styled-components";

export const VideoRequestDockWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background: #2b2e38;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin: 0.5rem;
`;

interface VideoRequestButtonProps {
  type?: string;
}
export const VideoRequestButton = styled.div<VideoRequestButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  transition: 0.25s;

  color: #ccc;
  font-size: 0.875rem;

  background-color: ${({ type }) =>
    type === "blank" ? "#3c404b" : type === "header" ? "#603cbb" : "#3c404b"};

  :hover {
    cursor: pointer;
    color: #fff;
    filter: brightness(${({ type }) => (type === "blank" ? 1 : 1.75)});
  }
`;
