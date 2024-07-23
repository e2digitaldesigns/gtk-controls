import styled from "styled-components";

export const HeaderWrapper = styled.div`
  /* border-bottom: 0.0625rem dashed ${props => props.theme.colors.border2}; */
  color: ${props => props.theme.colors.textActive};
  height: 5rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.itemHover};
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const HeaderInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 0.875rem;
`;
