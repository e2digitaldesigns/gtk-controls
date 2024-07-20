import React from "react";
import * as Styled from "./Episode.styles";
import axios from "axios";
import { defaultEpisode, Episode } from "../../../Types";
import { Topics } from "./Topics/Topics";

interface EpisodeProps {
  twitchUsername: string;
}

export const EpisodeComponent: React.FC<EpisodeProps> = ({ twitchUsername }) => {
  const [episodeState, setEpisodeState] = React.useState<Episode>(defaultEpisode);

  React.useEffect(() => {
    let stillHere = true;

    const fetchData = async () => {
      const id = "65b1e4e5b5b3e08ae5689aec";
      const { data } = await axios.get(`${process.env.REACT_APP_REST_API}/shows/showRunner/${id}`);

      console.log("Episode data", data);

      if (stillHere) {
        setEpisodeState({
          ...data
        });
      }
    };

    fetchData();

    return () => {
      stillHere = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.EpisodeWrapper>
      <div>hearer</div>

      <Topics topics={episodeState.topics} twitchUsername={twitchUsername} />
    </Styled.EpisodeWrapper>
  );
};
