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

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  background-color: #b81c46;
  box-sizing: border-box;

  select {
    width: 100%;
    height: 100%;
    background-color: #b81c46;
    color: #ddd;
    font-size: 0.875rem;
    font-weight: bold;
    border: none;
    outline: none;
    padding: 0 0.5rem;
    cursor: pointer;

    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    option {
      border-radius: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  padding: 0 0.5rem;
  height: 100%;
  align-items: center;
  justify-items: center;
  /* background-color: #7e0085; */
  padding: 0 0.5rem;
  border-left: 1px solid rgba(0, 0, 0, 0.4);
  color: white;
  > svg {
    color: #bbb;
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

  select {
    width: 100%;
    height: 100%;
    background-color: #7e0085;
    color: #ddd;
    font-size: 0.875rem;
    border: none;
    outline: none;
    padding: 0 0.5rem;
    cursor: pointer;

    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    option {
      border-radius: 0;
    }
  }
`;

interface IPausedIconWrapper {
  isPaused: boolean;
}

export const PausedIconWrapper = styled(IconWrapper)<IPausedIconWrapper>`
  background-color: transparent;
  > svg {
    opacity: ${props => (props.isPaused ? 1 : 0.25)};
  }
`;

export const ChatMessageWrapper = styled.div`
  height: calc(100vh - 4.5rem);
  margin: 0.5rem 0.5rem 0 0.5rem;
  padding: 0.5rem;
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
  margin-right: 0.3125rem;
  min-height: 1.5rem;
  font-size: 0.875rem;
`;

export const ChatMessageTextGrid = styled.div``;

interface IChatMessageNameProps {
  color?: string;
}

export const ChatMessageName = styled.div<IChatMessageNameProps>`
  color: ${props => props.color || "#fff"};
  font-weight: 500;
  display: flex;
`;

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