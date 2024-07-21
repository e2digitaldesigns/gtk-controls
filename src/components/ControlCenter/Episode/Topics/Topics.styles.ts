import styled from "styled-components";

export const TopicsWrapper = styled.div`
  margin: 0.5rem 0 0 0.5rem;
  height: calc(100vh - 12.5rem);
  padding: 0.5rem 0.5rem 0.5rem 0rem;
`;

export const TopicWrapper = styled.div`
  border-bottom: 1px dashed #222;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 100px;
  padding: 0.75rem;
  font-size: 0.875rem;

  &:last-child {
    border-bottom: none;
  }

  :hover {
    background-color: #191919;
  }
`;

export const TopicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const TopicName = styled.div`
  color: #ccc;
  font-weight: 500;
`;

export const TopicDescription = styled.div`
  color: #aaa;
`;

export const TopicOptions = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #aaa;
  margin-top: 0.25rem;
`;

export const TopicOptionLink = styled.div`
  cursor: pointer;
  :hover {
    filter: brightness(1.5);
  }
`;
