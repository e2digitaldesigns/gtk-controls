import React from "react";
import { Episode } from "../../../../Types";
import * as Styled from "./Header.styles";

interface EpisodeState {
  episodeState: Episode;
}

export const Header: React.FC<EpisodeState> = ({ episodeState }) => {
  return (
    <Styled.HeaderWrapper>
      <div>
        <Styled.HeaderTitle>{episodeState.name}</Styled.HeaderTitle>

        <Styled.HeaderInfo>
          <div>{episodeState.airDate}</div>
          <div>|</div>

          <div>Episode: {episodeState.number}</div>
          <div>|</div>
          <div>Topics: {episodeState.topics.length}</div>
        </Styled.HeaderInfo>
      </div>
    </Styled.HeaderWrapper>
  );
};
