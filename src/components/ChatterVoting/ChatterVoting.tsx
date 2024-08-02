import React from "react";
import { ScrollerDiv } from "../Shared";
import { useMessageDataStore } from "../../dataStores";
import * as Styled from "../ChatRanks/ChatRanks.styles";

export const ChatterVoting: React.FC = () => {
  const chatterVotes = useMessageDataStore(state => state.chatterVotes);

  return (
    <ScrollerDiv>
      <div>
        {chatterVotes.map((rank, index: number) => (
          <Styled.ChatRankGrid key={rank._id}>
            <Styled.ChatRankNum>{index + 1}</Styled.ChatRankNum>
            <Styled.ChatRankImage>
              <img src={rank.image} alt={rank.username} />
            </Styled.ChatRankImage>
            <Styled.ChatRankInfo>
              <div>{rank.username}</div>
              <div>{rank.votes}</div>
            </Styled.ChatRankInfo>
          </Styled.ChatRankGrid>
        ))}
      </div>
    </ScrollerDiv>
  );
};
