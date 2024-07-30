import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import { StorageKeys } from "../../Types";

type SectionState = {
  id: string;
  slot: number;
  title: string;
  component: string;
};

export interface ISectionsProps {
  sectionState: SectionState[];
  sortedSections: () => SectionState[];
  updateSectionSlots: (originId: string, destinationId: string) => void;
  swapSectionSlots: (originId: string, destinationId: string) => void;
  getSectionSlot: (id: string) => number;
}

const initialSectionState: SectionState[] = [
  { id: "1", slot: 1, title: "Chat", component: `ChatView` },
  { id: `2`, slot: 2, title: "Episode", component: `EpisodeComponent` },
  { id: `3`, slot: 3, title: "Chat Ranks", component: `ChatRanks` },
  { id: `6`, slot: 3, title: "Chat Ranks", component: `ChatRanks` },
  { id: `4`, slot: 4, title: "Controls", component: `ControlsView` },
  { id: `5`, slot: 5, title: "Controls", component: `ControlsView` }
];

const useSectionDataStore = create(
  persist<ISectionsProps>(
    (set: StoreApi<ISectionsProps>["setState"], get: StoreApi<ISectionsProps>["getState"]) => ({
      sectionState: initialSectionState,
      sortedSections: () => {
        return get().sectionState.sort((a, b) => a.slot - b.slot);
      },
      updateSectionSlots: (originId, destinationId) => {
        if (originId === destinationId) return;

        const originIndex = get().sectionState.findIndex(section => section.id === originId);
        const destinationIndex = get().sectionState.findIndex(
          section => section.id === destinationId
        );

        const newState = structuredClone(get().sectionState);

        const adjustSlots = (start: number, end: number, increment: number) => {
          for (let i = start; i <= end; i++) {
            newState[i].slot += increment;
          }
        };

        if (originIndex < destinationIndex) {
          adjustSlots(originIndex + 1, destinationIndex, -1);
        } else {
          adjustSlots(destinationIndex, originIndex - 1, 1);
        }

        newState[originIndex].slot = get().sectionState[destinationIndex].slot;

        newState.sort((a: SectionState, b: SectionState) => a.slot - b.slot);

        newState.forEach((section: SectionState, index: number) => {
          section.slot = index + 1;
        });

        set({ sectionState: newState });
      },

      swapSectionSlots: (originId, destinationId) => {
        console.log({ originId, destinationId });

        if (originId === destinationId) return;

        const originIndex = get().sectionState.findIndex(section => section.id === originId);
        const destinationIndex = get().sectionState.findIndex(
          section => section.id === destinationId
        );

        const newState = structuredClone(get().sectionState);

        const originSlot = newState[originIndex].slot;

        newState[originIndex].slot = newState[destinationIndex].slot;

        newState[destinationIndex].slot = originSlot;

        newState.sort((a: SectionState, b: SectionState) => a.slot - b.slot);

        set({ sectionState: newState });
      },

      getSectionSlot: (id: string) => {
        return get().sectionState.find(section => section.id === id)?.slot || 0;
      }
    }),
    {
      name: StorageKeys.SECTION_STORAGE,
      onRehydrateStorage: () => state => {
        console.log("Rehydrating state:", state);
      }
    }
  )
);

export default useSectionDataStore;
