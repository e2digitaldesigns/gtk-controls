import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 3rem;
  background-color: ${props => props.theme.colors.accent1};
  align-items: center;
  flex-shrink: 0;

  position: relative;

  grid-template-columns: 2rem 2rem 1fr 2rem;
  z-index: 100;
`;
