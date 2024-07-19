import styled from "styled-components";

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
