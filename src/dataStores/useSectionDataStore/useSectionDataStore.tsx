import { create, StoreApi } from "zustand";
import { persist } from "zustand/middleware";
import { StorageKeys } from "../../Types";

type SectionState = {
  id: string;
  slot: number;
  title: string;
  component: string;
  width: string;
};

export interface ISectionsProps {
  sectionState: SectionState[];
  sortedSections: () => SectionState[];
  updateSectionSlots: (originId: string, destinationId: string) => void;
  swapSectionSlots: (originId: string, destinationId: string) => void;
  getSectionSlot: (id: string) => number;
}

const initialSectionState: SectionState[] = [
  { id: "1", slot: 1, width: "600px", title: "Chat", component: `ChatView` },
  { id: `2`, slot: 2, width: "600px", title: "Episode", component: `EpisodeComponent` },
  { id: `3`, slot: 3, width: "400px", title: "Chat Ranks", component: `ChatRanks` },
  { id: `4`, slot: 5, width: "400px", title: "Controls", component: `ControlsView` }
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
