import React, { FC } from "react";
import * as Styled from "./ControlCenter.styles";
import { ControlCenterHeader } from "../../Components/ControlCenterHeader/ControlCenterHeader";
import { ChatView } from "../../Components/ChatView/ChatView";
import { EpisodeComponent } from "../../Components/Episode/Episode";
import { ControlsView } from "../../Components/Controls/Controls";

export const ControlCenter: FC = () => {
  const controlCenterRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const setDivHeight = () => {
      if (controlCenterRef.current) {
        controlCenterRef.current.style.height = `${window.innerHeight - 16}px`;
      }
    };

    setDivHeight();
    window.addEventListener("resize", setDivHeight);

    return () => {
      window.removeEventListener("resize", setDivHeight);
    };
  }, []);

  return (
    <>
      <Styled.ControlCenterWrapper data-testid="ControlCenterWrapper" ref={controlCenterRef}>
        <ControlCenterHeader origin="controlCenter" />
        <Styled.ControlCenterGrid data-testid="ControlCenterGrid">
          <ChatView />
          <EpisodeComponent />
          <ControlsView />
        </Styled.ControlCenterGrid>
      </Styled.ControlCenterWrapper>
    </>
  );
};
