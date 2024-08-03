import React from "react";
import axios from "axios";
import { useEpisode, useMessageDataStore, useUserDataStore } from "../../dataStores";
import { Header } from "./Header/Header";
import { Topics } from "./Topics/Topics";

export const EpisodeComponent: React.FC = () => {
  const { templateId } = useMessageDataStore(state => state);
  const { userData } = useUserDataStore(state => state);
  const { hydrate } = useEpisode(state => state);

  React.useEffect(() => {
    let isMounted = true;

    if (!userData.userId || !templateId) return;

    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/shows/controlCenter/${userData.userId}/${templateId}`
      );

      if (isMounted) {
        hydrate(data);
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
      <Header />
      <Topics />
    </>
  );
};
