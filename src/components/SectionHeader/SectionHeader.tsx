import React, { useRef } from "react";
import * as Styled from "./SectionHeader.styles";
import { Icon } from "../../utils";
import { ApplicationSection } from "../../Types";

interface SectionHeaderProps {
  children?: React.ReactNode;
  dragDropRef: React.RefObject<HTMLDivElement>;
  section: ApplicationSection;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children, dragDropRef, section }) => {
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleDragAllow = () => {
    if (!dragDropRef.current) return;

    dragDropRef.current.draggable = true;
    if (iconRef?.current?.style) {
      iconRef.current.style.cursor = "grab";
    }
  };

  const HandleDragReject = () => {
    if (!dragDropRef.current) return;
    dragDropRef.current.draggable = false;
  };

  return (
    <Styled.SectionHeaderWrapper ref={sectionHeaderRef}>
      <div ref={iconRef} onMouseOver={handleDragAllow} onMouseOut={HandleDragReject}>
        <Icon name="MoreVertical" />
      </div>
      <div>
        <Icon name={section.icon} />
      </div>
      {children ? <div>{children}</div> : <div>{section.title}</div>}
      <div>
        <Icon name="Activity" />
      </div>
    </Styled.SectionHeaderWrapper>
  );
};
