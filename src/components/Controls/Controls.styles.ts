import styled from "styled-components";

export const ControlDockWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #232323;
`;

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  color: white;
  font-weight: bold;
  text-transform: uppercase;
  background-color: red;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 0.5rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  transition: 0.25s;

  color: #ccc;
  font-size: 0.875rem;

  :hover {
    cursor: pointer;
    filter: brightness(1.75);
    color: #fff;
  }

  :last-child:nth-child(3n - 1) {
    grid-column: span 2;
  }

  :last-child:nth-child(3n - 2) {
    grid-column: span 3;
  }

  :nth-child(1) {
    background-color: #603cbb;
  }

  :nth-child(2) {
    background-color: #0099ac;
  }

  :nth-child(3) {
    background-color: #b81c46;
  }

  :nth-child(4) {
    background-color: #d45134;
  }

  :nth-child(5) {
    background-color: #9e00a6;
  }
`;
