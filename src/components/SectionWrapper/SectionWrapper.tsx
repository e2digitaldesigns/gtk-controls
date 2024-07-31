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
        <SectionHeader dragDropRef={dragDropRef} title={sectionHeaderTitle + " - " + isDragOver} />
        {children}
      </Styled.SectionWrapper>

      <div
        ref={ghostImageRef}
        style={{
          position: "absolute",
          top: "-1000px",
          left: "-1000px",
          width,
          height: "100%",
          background: "red"
        }}
      >
        <h1>{sectionHeaderTitle}</h1>
      </div>
    </>
  );
};

// export const SectionWrapper = React.memo(SectionWrapperInner, () => true);
