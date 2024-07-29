import React from "react";

import * as Styled from "./Controls.styles";

import { OverlayControls } from "./OverlayControls/OverlayControls";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { ScrollerDiv } from "../Shared";

import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

export const ControlsView: React.FC = () => {
  return (
    // <SectionWrapper sectionHeaderTitle="Controls">
    <ScrollerDiv>
      <div style={{ paddingRight: ".5rem" }}>
        <OverlayControls />
      </div>
    </ScrollerDiv>
    // </SectionWrapper>

    // <Styled.ControlDockWrapper
    //   onDrop={() => console.log("controls drop")}
    //   onDragOver={() => console.log("controls over")}
    // >
    //   <SectionHeader title="Controls" />
    //   <ScrollerDiv>
    //     <div style={{ paddingRight: ".5rem" }}>
    //       <OverlayControls />
    //     </div>
    //   </ScrollerDiv>
    // </Styled.ControlDockWrapper>
  );
};
