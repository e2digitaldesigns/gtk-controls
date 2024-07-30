import styled from "styled-components";

export const ChatMessageOptionsWrapper = styled.div<{ position?: string }>`
  display: flex;
  justify-content: ${props => (props.position === "right" ? "flex-end" : "flex-start")};
  gap: 0.5rem;
`;

export const ChatMessageIcons = styled.div`
  display: flex;
  justify-items: center;
  margin-right: 0.5rem;

  > svg {
    color: ${props => props.theme.colors.icon1};
    width: 1rem;
    cursor: pointer;
    margin: 0 0.125rem;
    stroke-width: 2.5px;
  }

  &:hover {
    > svg {
      color: ${props => props.theme.colors.textActive};
    }
  }
`;
