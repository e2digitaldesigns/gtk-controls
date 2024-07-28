import React, { FC } from "react";
import * as Styled from "./ControlCenter.styles";
import { ControlCenterHeader } from "../../components/ControlCenterHeader/ControlCenterHeader";
import { ChatView } from "../../components/ChatView/ChatView";
import { EpisodeComponent } from "../../components/Episode/Episode";
import { ControlsView } from "../../components/Controls/Controls";
import { ChatRanks } from "../../components/ChatRanks/ChatRanks";

export const ControlCenter: FC = () => {
  const controlCenterRef = React.useRef<HTMLDivElement>(null);
  const controlCenterGridRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const setDivHeight = () => {
      if (controlCenterRef.current) {
        controlCenterRef.current.style.height = `${(window.innerHeight - 16) / 16}rem`;
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
        <Styled.ControlCenterGrid ref={controlCenterGridRef}>
          <ChatView />
          <EpisodeComponent />
          <ChatRanks />
          <ControlsView />
        </Styled.ControlCenterGrid>
      </Styled.ControlCenterWrapper>
    </>
  );
};
