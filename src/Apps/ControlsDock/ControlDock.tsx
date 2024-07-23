import React from "react";
import { OverlayControls } from "../../components/Controls/OverlayControls/OverlayControls";

import * as Styled from "./ControlDock.styles";
import { ControlCenterHeader } from "../../components/ControlCenterHeader/ControlCenterHeader";

export const ControlDock: React.FC = () => {
  return (
    <Styled.ControlDockWrapper>
      <ControlCenterHeader origin="controlDock" />

      <OverlayControls />
    </Styled.ControlDockWrapper>
  );
};
