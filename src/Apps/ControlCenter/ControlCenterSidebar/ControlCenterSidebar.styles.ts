import styled from "styled-components";

export const SectionsGrid = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr 1rem;
  border-bottom: 1px dashed ${props => props.theme.colors.border2};
  padding: 0.5rem;
  gap: 0.25rem;

  &:hover {
    background-color: ${props => props.theme.colors.itemHover};
  }

  &:last-child {
    border-bottom: none;
  }

  div {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.text};
    font-size: 0.875rem;
  }

  div:nth-child(1) {
  }

  div:nth-child(2) {
    font-size: 0.875rem;
  }

  div:last-child {
    justify-content: flex-end;
  }
`;
