import styled from "styled-components";

interface SettingDrawerWrapperProps {
  isOpen: boolean;
}

export const SettingDrawerBacker = styled.div<SettingDrawerWrapperProps>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: ${props => (props.isOpen ? "0" : "-100vw")};
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9998;
  transition: right 0.5s ease-in-out;
`;

export const SettingDrawerWrapper = styled.div<SettingDrawerWrapperProps>`
  position: absolute;
  top: 0;
  left: ${props => (props.isOpen ? "0" : "-400px")};
  z-index: 9999;

  width: 400px;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.background};

  color: ${props => props.theme.colors.text};

  transition: left 0.5s ease-in-out;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.75);
`;

export const HeaderWrapperGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const OptionsWrapperGridInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-top: 0.0625rem dashed ${props => props.theme.colors.border2};
  padding: 0.25rem 0 0.5rem 0.5rem;
  min-height: 3rem;
  align-items: center;

  &:last-child {
    border-bottom: 0.0625rem dashed ${props => props.theme.colors.border2};
  }

  select {
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-size: 0.875rem;
    border: none;
    outline: none;
    /* padding: 0.5rem; */
    cursor: pointer;
    text-align: right;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;
