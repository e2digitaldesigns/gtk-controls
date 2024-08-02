import { create, StoreApi } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { ApplicationSection, StorageKeys } from "../../Types";
import { availableSections } from "./availableSections";

type SectionState = ApplicationSection;

const initialSectionState: SectionState[] = [
  ...availableSections.slice(0, 5).map((section: ApplicationSection, index: number) => ({
    ...section,
    slot: index + 1
  }))
];

export interface ISectionsProps {
  availableSections: SectionState[];
  sectionState: SectionState[];
  sortedSections: () => SectionState[];
  updateSectionSlots: (originId: string, destinationId: string) => void;
  swapSectionSlots: (originId: string, destinationId: string) => void;
  getSectionSlot: (id: string) => number;
  removeSection: (id: string) => void;
  addSection: (id: string, ref: React.MutableRefObject<HTMLDivElement | null>) => void;
}

const useSectionDataStore = create(
  persist<ISectionsProps>(
    (set: StoreApi<ISectionsProps>["setState"], get: StoreApi<ISectionsProps>["getState"]) => ({
      sectionState: initialSectionState,
      availableSections: availableSections,
      sectionWrapper: null,
      sortedSections: () => {
        return get().sectionState.sort((a, b) => a.slot - b.slot);
      },
      updateSectionSlots: (originId, destinationId) => {
        if (originId === destinationId) return;

        const originIndex = get().sectionState.findIndex(section => section._id === originId);
        const destinationIndex = get().sectionState.findIndex(
          section => section._id === destinationId
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
        if (originId === destinationId) return;

        const originIndex = get().sectionState.findIndex(section => section._id === originId);
        const destinationIndex = get().sectionState.findIndex(
          section => section._id === destinationId
        );

        const newState = structuredClone(get().sectionState);

        const originSlot = newState[originIndex].slot;

        newState[originIndex].slot = newState[destinationIndex].slot;

        newState[destinationIndex].slot = originSlot;

        newState.sort((a: SectionState, b: SectionState) => a.slot - b.slot);

        set({ sectionState: newState });
      },

      getSectionSlot: (id: string) => {
        return get().sectionState.find(section => section._id === id)?.slot || 0;
      },

      removeSection: (id: string) => {
        const newState = structuredClone(get().sectionState);
        const filteredState = newState.filter((section: SectionState) => section._id !== id);

        filteredState.forEach((section: SectionState, index: number) => {
          section.slot = index + 1;
        });

        set({ sectionState: filteredState });
      },

      addSection: (id: string, sectionWrapperRef) => {
        const maxSections = 12;
        const newState = structuredClone(get().sectionState);
        if (newState.length >= maxSections) return;

        const sections = structuredClone(get().availableSections);
        const newSection = sections.find((section: SectionState) => section._id === id);

        if (newSection) {
          newSection._id = new Date().getTime().toString();
          newSection.slot = 99;
          newState.push(newSection);
        }

        newState.sort((a: SectionState, b: SectionState) => a.slot - b.slot);

        newState.forEach((section: SectionState, index: number) => {
          section.slot = index + 1;
        });

        set({ sectionState: newState });

        if (sectionWrapperRef) {
          setTimeout(() => {
            sectionWrapperRef.current?.scrollTo({
              left: sectionWrapperRef.current.scrollWidth,
              behavior: "smooth"
            });
          }, 100);
        }
      }
    }),
    {
      name: StorageKeys.SECTION_STORAGE,
      partialize: state => {
        const { sectionState } = state;
        return { sectionState };
      }
    } as PersistOptions<ISectionsProps>
  )
);

export default useSectionDataStore;
