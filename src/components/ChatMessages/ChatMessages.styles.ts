import styled from "styled-components";
import * as GStyled from "../../globalStyles";

export const ChatMessageWrapper = styled(GStyled.SectionWrapper)`
  gap: 05.5rem;
  height: 100%;
  overflow: hidden;
`;

export const ChatMessageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
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

export const ChatMessageGridLarge = styled(ChatMessageGrid)`
  grid-template-columns: 1fr;
`;

interface IChatMessage {}

export const ChatMessage = styled.div<IChatMessage>`
  display: flex;
  gap: 0.5rem;
`;

export const ChatMessageLarge = styled.div<IChatMessage>`
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 0.5rem;
`;

export const ChatMessageImage = styled.div<IChatMessage>`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 0.25rem;
  > img {
    width: 2rem;
    height: 2rem;
  }
`;

export const ChatMessageInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
