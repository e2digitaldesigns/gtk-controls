import React from "react";
import * as Styled from "./Episode.styles";
import axios from "axios";

import { useMessageDataStore, useUserDataStore } from "../../dataStores";
import { defaultEpisode, Episode } from "../../Types";
import { Header } from "./Header/Header";
import { Topics } from "./Topics/Topics";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const EpisodeComponent: React.FC = () => {
  const [episodeState, setEpisodeState] = React.useState<Episode>(defaultEpisode);

  const { templateId } = useMessageDataStore(state => state);
  const { userData } = useUserDataStore(state => state);

  React.useEffect(() => {
    let isMounted = true;

    if (!userData.userId || !templateId) return;

    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/shows/controlCenter/${userData.userId}/${templateId}`
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
  }, [templateId, userData.userId]);

  return (
    <>
      {/* <SectionWrapper sectionHeaderTitle="Episode"> */}
      <Header episodeState={episodeState} />
      <Topics topics={episodeState.topics} />
      {/* </SectionWrapper>{" "} */}
    </>

    // <Styled.EpisodeWrapper
    //   onDrop={() => console.log("episode drop")}
    //   onDragOver={() => console.log("episode over")}
    // >
    //   <SectionHeader title="Episode" />
    //   <Header episodeState={episodeState} />
    //   <Topics topics={episodeState.topics} />
    // </Styled.EpisodeWrapper>
  );
};
