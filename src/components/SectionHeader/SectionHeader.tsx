import React, { useRef } from "react";
import { Activity, MoreVertical } from "react-feather";
import * as Styled from "./SectionHeader.styles";

interface SectionHeaderProps {
  children?: React.ReactNode;
  dragDropRef: React.RefObject<HTMLDivElement>;
  title?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ children, dragDropRef, title }) => {
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
        <MoreVertical />
      </div>
      <div>
        <Activity />
      </div>
      {title ? <div>{title}</div> : <div>{children}</div>}
      <div>
        <Activity />
      </div>
    </Styled.SectionHeaderWrapper>
  );
};
