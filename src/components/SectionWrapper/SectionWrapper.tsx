import React from "react";
import * as Styled from "./SectionWrapper.styles";
import { useDragSection } from "../../hooks";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ApplicationSection } from "../../Types";

interface IntSectionWrapper {
  children: React.ReactNode;
  section: ApplicationSection;
}

export const SectionWrapper: React.FC<IntSectionWrapper> = ({ children, section }) => {
  const {
    dragDropRef,
    handleOnDragEnter,
    handleOnDragLeave,
    handleOnDragOver,
    handleOnDrop,
    ghostImageRef
  } = useDragSection(section._id);

  return (
    <>
      <Styled.SectionWrapper
        data-testid={section.title}
        onDragEnter={handleOnDragEnter}
        onDragLeave={handleOnDragLeave}
        onDragOver={handleOnDragOver}
        onDrop={e => handleOnDrop(e, section._id)}
        ref={dragDropRef}
        style={{ width: section.width }}
      >
        <div ref={ghostImageRef} style={{ width: section.width }}>
          <SectionHeader dragDropRef={dragDropRef} section={section} />
        </div>
        {children}
      </Styled.SectionWrapper>
    </>
  );
};
