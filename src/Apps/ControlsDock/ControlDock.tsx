import React from "react";
import { OverlayControls } from "../../Components/Controls/OverlayControls/OverlayControls";

import * as Styled from "./ControlDock.styles";
import { ControlCenterHeader } from "../../Components/ControlCenterHeader/ControlCenterHeader";

export const ControlDock: React.FC = () => {
  return (
    <Styled.ControlDockWrapper>
      <ControlCenterHeader origin="controlDock" />

      <OverlayControls />
    </Styled.ControlDockWrapper>
  );
};
