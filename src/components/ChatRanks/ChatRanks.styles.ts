import styled from "styled-components";
import * as GStyled from "../../globalStyles";

export const ChatRankWrapper = styled(GStyled.SectionWrapper)``;

export const ChatRankGrid = styled.div`
  align-items: center;
  border-bottom: 0.0625rem dashed ${props => props.theme.colors.border2};
  color: ${props => props.theme.colors.text};
  display: grid;
  font-size: 0.875rem;
  gap: 0.5rem;
  grid-template-columns: 2rem 2rem auto;
  margin-right: 0.5rem;
  min-height: 1.5rem;
  padding: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.colors.itemHover};
  }

  transition: background-color 0.25s ease;
`;

export const ChatRankNum = styled.div`
  align-items: center;
  display: flex;
  font-size: 1rem;
  justify-content: center;
`;

export const ChatRankImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  > img {
    border-radius: 0.25rem;
    height: 100%;
    width: 100%;
  }
`;

export const ChatRankInfo = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-child(1) {
    color: ${props => props.theme.colors.textActive};
  }

  > div:nth-child(2) {
    font-size: 0.875rem;
  }
`;
