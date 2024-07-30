import React from "react";
import { ScrollerDiv } from "../Shared";
import * as Styled from "./ChatRanks.styles";
import { useMessageDataStore } from "../../dataStores";

export const ChatRanks: React.FC = () => {
  const rankings = useMessageDataStore(state => state.chatRanks);

  return (
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
  );
};
