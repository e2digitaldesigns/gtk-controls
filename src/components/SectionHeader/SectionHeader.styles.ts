import styled from "styled-components";

export const SectionHeaderWrapper = styled.div`
  display: grid;
  width: 400px;
  height: 3rem;
  background-color: ${props => props.theme.colors.accent1};
  align-items: center;
  position: relative;

  grid-template-columns: 2rem 2rem 1fr 2rem;
`;
