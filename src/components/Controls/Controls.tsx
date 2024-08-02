import React from "react";
import { OverlayControls } from "./OverlayControls/OverlayControls";
import { ScrollerDiv } from "../Shared";

export const ControlsView: React.FC = () => {
  return (
    <ScrollerDiv>
      <div style={{ paddingRight: ".5rem" }}>
        <OverlayControls />
      </div>
    </ScrollerDiv>
  );
};
