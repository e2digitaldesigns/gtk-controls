import React, { FC } from "react";
import * as Styled from "./ControlCenter.styles";
import { ControlCenterHeader } from "../../components/ControlCenterHeader/ControlCenterHeader";
import { ChatView } from "../../components/ChatView/ChatView";
import { EpisodeComponent } from "../../components/Episode/Episode";
import { ControlsView } from "../../components/Controls/Controls";
import { ChatRanks } from "../../components/ChatRanks/ChatRanks";
import { useSectionDataStore } from "../../dataStores";
import { SectionWrapper } from "../../components/SectionWrapper/SectionWrapper";

const componentMap: Record<string, React.ElementType> = {
  ChatView: ChatView,
  EpisodeComponent: EpisodeComponent,
  ChatRanks: ChatRanks,
  ControlsView: ControlsView
};

export const ControlCenter: FC = () => {
  const controlCenterRef = React.useRef<HTMLDivElement>(null);
  const controlCenterGridRef = React.useRef<HTMLDivElement>(null);

  const { sectionState, sortedSections } = useSectionDataStore();

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
          {sortedSections().map((section, index) => {
            const ComponentToRender = componentMap[section.component];

            if (!ComponentToRender) {
              return null;
            }

            return (
              <React.Fragment key={section.id}>
                <SectionWrapper
                  sectionHeaderTitle={`${section.title} - ${section.slot}`}
                  sectionId={section.id}
                >
                  {React.createElement(ComponentToRender, {})}
                </SectionWrapper>
              </React.Fragment>
            );
          })}
        </Styled.ControlCenterGrid>
      </Styled.ControlCenterWrapper>
    </>
  );
};
