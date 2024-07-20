import styled from "styled-components";

export const ChatMessageWrapper = styled.div`
  /* height: calc(100vh - 8rem); */
  height: 100%;
  margin: 0.5rem 0.5rem 0 0.5rem;
  padding: 0.5rem;
  background-color: #202124;
`;

export const ChatMessageWrapperCC = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  height: calc(100vh - 6.5rem);
  padding: 0.5rem 0.5rem 0.5rem 0rem;
  background-color: #202124;
`;

export const ChatMessageWrapperInner = styled.div`
  overflow-x: hidden !important;
  overflow-y: scroll !important;
  height: 100%;

  ::-webkit-scrollbar {
    width: 0.625rem;
    height: 10px;
    background-color: #424242;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #686868;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
`;

export const ChatMessageGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: 1fr repeat(${props => props.columns}, 1.25rem);
  gap: 0.25rem;
  padding: 0.5rem;
  border-bottom: 0.0625rem solid #3a3a3a;
  color: #ccc;
  margin-right: 0.5rem;
  min-height: 1.5rem;
  font-size: 0.875rem;

  &:hover {
    background-color: #282828;
  }

  transition: background-color 0.25s ease;
`;

interface IChatMessageNameProps {
  color?: string;
}

export const ChatMessage = styled.div<IChatMessageNameProps>`
  color: ${props => props.color || "#fff"};
  font-weight: 500;
`;

export const ChatMessageIcons = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

  > svg {
    color: #999;
    width: 1.25rem;
    cursor: pointer;
    margin: 0 0.125rem;
    stroke-width: 2.5px;
  }

  &:hover {
    > svg {
      color: #fff;
    }
  }
`;
