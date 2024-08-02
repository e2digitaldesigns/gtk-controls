import React, { FC } from "react";
import * as Styled from "./ControlCenter.styles";
import { ControlCenterHeader } from "../../components/ControlCenterHeader/ControlCenterHeader";
import { ChatView } from "../../components/ChatView/ChatView";
import { EpisodeComponent } from "../../components/Episode/Episode";
import { ControlsView } from "../../components/Controls/Controls";
import { ChatRanks } from "../../components/ChatRanks/ChatRanks";
import { useSectionDataStore } from "../../dataStores";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";
import { ControlCenterSidebar } from "./ControlCenterSidebar/ControlCenterSidebar";

const componentMap: Record<string, React.ComponentType<any>> = {
  ChatView: ChatView,
  EpisodeComponent: EpisodeComponent,
  ChatRanks: ChatRanks,
  ControlsView: ControlsView
};

export const ControlCenter: FC = () => {
  const controlCenterRef = React.useRef<HTMLDivElement>(null);
  const controlCenterGridRef = React.useRef<HTMLDivElement>(null);

  const { sortedSections } = useSectionDataStore();

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

        <Styled.ControlCenterMainGrid>
          <ControlCenterSidebar parentRef={controlCenterGridRef} />
          <Styled.ControlCenterGrid ref={controlCenterGridRef}>
            {sortedSections().map(section => {
              const ComponentToRender = componentMap[section.component];

              if (!ComponentToRender) {
                return null;
              }
              return (
                <React.Fragment key={section._id}>
                  <SectionWrapper section={section}>
                    {React.createElement(ComponentToRender, { sectionId: section._id })}
                  </SectionWrapper>
                </React.Fragment>
              );
            })}
          </Styled.ControlCenterGrid>
        </Styled.ControlCenterMainGrid>
      </Styled.ControlCenterWrapper>
    </>
  );
};
