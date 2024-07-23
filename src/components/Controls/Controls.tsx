import React from "react";

import * as Styled from "./Controls.styles";

import { OverlayControls } from "./OverlayControls/OverlayControls";

export const ControlsView: React.FC = () => {
  return (
    <Styled.ControlDockWrapper>
      <OverlayControls />
    </Styled.ControlDockWrapper>
  );
};
