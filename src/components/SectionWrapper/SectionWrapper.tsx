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
  const {
    dragDropRef,
    handleOnDragEnter,
    handleOnDragLeave,
    handleOnDragOver,
    handleOnDrop,
    isDragOver,
    ghostImageRef
  } = useDragSection(sectionId);

  return (
    <>
      <Styled.SectionWrapper
        data-testid={sectionHeaderTitle}
        onDragEnter={handleOnDragEnter}
        onDragLeave={handleOnDragLeave}
        onDragOver={handleOnDragOver}
        onDrop={e => handleOnDrop(e, sectionId)}
        ref={dragDropRef}
        style={{ width }}
      >
        <div ref={ghostImageRef}>
          <SectionHeader
            dragDropRef={dragDropRef}
            title={sectionHeaderTitle + " - " + isDragOver}
          />
        </div>
        {children}
      </Styled.SectionWrapper>
    </>
  );
};

// export const SectionWrapper = React.memo(SectionWrapperInner, () => true);
