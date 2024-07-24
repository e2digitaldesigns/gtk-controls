import styled from "styled-components";

export const TopicsWrapper = styled.div`
  gap: 0.5rem;
  height: 100%;
  overflow: hidden;
`;

export const TopicWrapper = styled.div<{ active: boolean }>`
  border-bottom: 1px dashed ${props => props.theme.colors.border2};
  ${props => props.theme.colors.textActive};
  display: grid;
  grid-template-columns: 1fr 100px;
  padding: 0.75rem;
  font-size: 0.875rem;

  background-color: ${props => (props.active ? props.theme.colors.itemActive : "transparent")};

  &:last-child {
    border-bottom: none;
  }

  :hover {
    background-color: ${props =>
      props.active ? props.theme.colors.itemActive : props.theme.colors.itemHover};
  }

  transition: background-color 0.25s ease;
`;

export const TopicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TopicName = styled.div`
  color: ${props => props.theme.colors.textActive};
  font-weight: 500;
`;

export const TopicDescription = styled.div`
  color: ${props => props.theme.colors.text};
`;

export const TopicOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${props => props.theme.colors.textPre};
  margin-top: 0.25rem;
`;

export const TopicOptionLink = styled.div`
  cursor: pointer;
  :hover {
    filter: brightness(1.5);
  }
`;
