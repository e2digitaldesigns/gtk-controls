import React from "react";
import { ScrollerDiv } from "../Shared";
import * as Styled from "./ChatRanks.styles";
import { useMessageDataStore } from "../../dataStores";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export const ChatRanks: React.FC = () => {
  const rankings = useMessageDataStore(state => state.chatRanks);

  const handleDragStart = (e: React.DragEvent) => {
    console.log(12);
    console.log(e);

    const draggedElement = e.target; // The element that triggered the drag start
    console.log("Dragged Element:", draggedElement);
  };

  return (
    <Styled.ChatRankWrapper onDragStart={handleDragStart}>
      <SectionHeader title="Chatter Ranks" />
      <ScrollerDiv>
        <div>
          {rankings.map((rank, index: number) => (
            <Styled.ChatRankGrid key={rank._id}>
              <Styled.ChatRankNum>{index + 1}</Styled.ChatRankNum>
              <Styled.ChatRankImage>
                <img src={rank.image} alt={rank.username} />
              </Styled.ChatRankImage>
              <Styled.ChatRankInfo>
                <div>{rank.username}</div>
                <div>{rank.messageCount}</div>
              </Styled.ChatRankInfo>
            </Styled.ChatRankGrid>
          ))}
        </div>
      </ScrollerDiv>
    </Styled.ChatRankWrapper>
  );
};
