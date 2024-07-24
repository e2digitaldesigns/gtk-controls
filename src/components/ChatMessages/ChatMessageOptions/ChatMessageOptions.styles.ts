import styled from "styled-components";

export const ChatMessageOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChatMessageIcons = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

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
