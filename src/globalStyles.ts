import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    color: #fff;
    background-color: #232323;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


    -webkit-user-select: none; 
    -ms-user-select: none; 
    user-select: none; 

    ::-webkit-scrollbar {
      background-color: #333;
      height: 0.375rem;
      width: 0.5rem;
    }

  ::-webkit-scrollbar-thumb {
      background-color: #3f3f3f;

      :hover {
        background-color: #5a5a5a;
      }
    }
  }


`;

export default GlobalStyle;

export const GlobalIconWrapper = styled.div`
  align-items: center;
  border-right: 0.0625rem solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
  display: flex;
  height: 100%;
  justify-items: center;
  padding: 0 0.5rem;
  > svg {
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    margin: 0 0.125rem;
    stroke-width: 2.5px;
    width: 1.25rem;
  }

  &:last-child {
    border-right: none;
  }

  &:hover {
    > svg {
      color: ${props => props.theme.colors.textHover};
    }
  }
`;

export const globalSelectorWrapper = styled.select`
  background-color: ${props => props.theme.colors.accent1};
  border-radius: 0;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  height: 100%;
  outline: none;
  padding: 0 0.5rem;
  width: 100%;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
