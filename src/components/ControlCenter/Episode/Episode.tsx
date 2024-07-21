import React from "react";
import * as Styled from "./Episode.styles";
import axios from "axios";
import { defaultEpisode, Episode } from "../../../Types";
import { Topics } from "./Topics/Topics";
import { useMessageDataStore } from "../../../dataStores";
import { getUserId } from "../../../utils";
import { Header } from "./Header/Header";

export const EpisodeComponent: React.FC = () => {
  const [episodeState, setEpisodeState] = React.useState<Episode>(defaultEpisode);

  const { templateId } = useMessageDataStore(state => state);
  const userId = getUserId();

  React.useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/shows/controlCenter/${userId}/${templateId}`
      );

      if (isMounted) {
        setEpisodeState({
          ...data
        });
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateId]);

  return (
    <Styled.EpisodeWrapper>
      <Header episodeState={episodeState} />

      <Topics topics={episodeState.topics} />
    </Styled.EpisodeWrapper>
  );
};
