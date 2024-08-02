import React, { useEffect, useState } from "react";
import { useSectionDataStore } from "../../dataStores";

export interface UseSetScrollProps {
  sectionRef: React.RefObject<HTMLElement>;
  sectionId?: string;
}

const usePersistScrollTop = ({ sectionRef, sectionId }: UseSetScrollProps) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const { getSectionSlot } = useSectionDataStore(state => state);
  const sectionSlot = getSectionSlot(sectionId as string);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        setScrollTop(sectionRef.current.scrollTop);
      }
    };

    const currentRef = sectionRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    sectionRef.current.scrollTop = scrollTop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionSlot]);
};

export default usePersistScrollTop;
