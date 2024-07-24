import styled from "styled-components";

export const ChatMessageWrapper = styled.div`
  gap: 0.5rem;
  height: 100%;
  overflow: hidden;
`;

export const ChatMessageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 8rem;
  gap: 0.25rem;
  padding: 0.5rem;
  border-bottom: 0.0625rem dashed ${props => props.theme.colors.border2};
  color: ${props => props.theme.colors.text};
  margin-right: 0.5rem;
  min-height: 1.5rem;
  font-size: 0.875rem;

  &:hover {
    background-color: ${props => props.theme.colors.itemHover};
  }

  transition: background-color 0.25s ease;
`;

interface IChatMessageNameProps {
  color?: string;
}

export const ChatMessage = styled.div<IChatMessageNameProps>`
  color: ${props => props.color || props.theme.colors.textActive};
  font-weight: 400;
`;
