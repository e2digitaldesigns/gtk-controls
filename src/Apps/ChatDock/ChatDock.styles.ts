import styled from "styled-components";

export const ChatDockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  height: 100vh;
`;

export const ControlDockHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  transition: 0.25s;

  color: ${props => props.theme.colors.text};
  font-size: 0.875rem;

  background-color: ${props => props.theme.colors.accent4};

  :hover {
    cursor: pointer;
    filter: brightness(1.75);
    color: ${props => props.theme.colors.textActive};
  }
`;
