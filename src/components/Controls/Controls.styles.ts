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

export const IconWrapper = styled.div`
  display: flex;
  padding: 0 0.5rem;
  height: 100%;
  align-items: center;
  justify-items: center;
  /* background-color: #7e0085; */

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
`;

export const SelectWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  margin: 0.5rem 0.5rem 0 0.5rem;
  background-color: #603cbb;
  box-sizing: border-box;

  select {
    width: 100%;
    height: 100%;
    background-color: #603cbb;
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
  height: 2.75rem;
  transition: 0.25s;

  color: #ccc;
  font-size: 0.875rem;

  background-color: #3c404b;

  :hover {
    cursor: pointer;
    filter: brightness(1.75);
    color: #fff;
  }

  /* :last-child:nth-child(3n - 1) {
    grid-column: span 2;
  }

  :last-child:nth-child(3n - 2) {
    grid-column: span 3;
  } */

  /* :nth-child(1) {
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

  :nth-child(6) {
    background-color: #336699;
  }

  :nth-child(7) {
    background-color: #a400ab;
  }

  :nth-child(8) {
    background-color: #bd3d18;
  }

  :nth-child(9) {
    background-color: #97006b;
  }

  :nth-child(10) {
    background-color: #603cbb;
  }

  :nth-child(11) {
    background-color: #0099ac;
  }

  :nth-child(12) {
    background-color: #b81c46;
  } */
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.75rem;
  transition: 0.25s;
  font-weight: bold;

  margin: 0.75rem 0.5rem 0 0.5rem;

  color: #ccc;
  font-size: 0.875rem;
  background-color: #603cbb;

  :hover {
    cursor: pointer;
    filter: brightness(1.75);
    color: #fff;
  }
`;
