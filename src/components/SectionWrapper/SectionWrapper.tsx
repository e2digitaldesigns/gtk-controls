import React from "react";
import * as Styled from "./SectionWrapper.styles";
import { useDragSection } from "../../hooks";
import { SectionHeader } from "../SectionHeader/SectionHeader";

interface IntSectionWrapper {
  children: React.ReactNode;
  sectionHeaderTitle: string;
  sectionId: string;
  width: string;
}

export const SectionWrapper: React.FC<IntSectionWrapper> = ({
  children,
  sectionHeaderTitle,
  sectionId,
  width
}) => {
  const { dragDropRef, handleDragEnter, handleDragLeave, handleDragOver, handleDrop, isDragOver } =
    useDragSection(sectionId);

  return (
    <Styled.SectionWrapper
      style={{ width }}
      data-testid={sectionHeaderTitle}
      onDragOver={handleDragOver}
      onDrop={e => handleDrop(e, sectionId)}
      ref={dragDropRef}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <SectionHeader title={sectionHeaderTitle + " - " + isDragOver} />
      {children}
    </Styled.SectionWrapper>
  );
};

// export const SectionWrapper = React.memo(SectionWrapperInner, () => true);
