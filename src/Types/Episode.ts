export type EpisodeTopic = {
  _id: string;
  articles: string;
  chat: string;
  desc: string;
  hostNotes: string;
  img: string;
  name: string;
  notes: string;
  video: string;
  content: {
    type: string;
    file: string;
  };
};

export type Episode = {
  _id: string;
  airDate: string;
  logo: string;
  name: string;
  number: number;
  topics: EpisodeTopic[];
};

export const defaultEpisode: Episode = {
  _id: "",
  airDate: "",
  logo: "",
  name: "",
  number: 0,
  topics: []
};
