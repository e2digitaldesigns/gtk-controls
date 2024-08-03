import { create } from "zustand";
import { defaultEpisode, Episode } from "../../Types";

interface EpisodeDataState extends Episode {
  hydrate: (data: Episode) => void;
  get: () => Episode;
}

const useEpisodeDataStore = create<EpisodeDataState>((set, get) => ({
  ...defaultEpisode,
  hydrate: (data: Episode) => set({ ...data }),
  get: () => get()
}));

export default useEpisodeDataStore;
