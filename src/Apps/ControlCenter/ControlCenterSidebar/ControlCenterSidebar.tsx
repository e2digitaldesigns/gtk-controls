import React from "react";
import { useSectionDataStore } from "../../../dataStores";
import { ScrollerDiv } from "../../../components/Shared";
import * as Styled from "./ControlCenterSidebar.styles";
import { Icon } from "../../../utils";

interface ControlCenterSidebarProps {
  parentRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const ControlCenterSidebar: React.FC<ControlCenterSidebarProps> = ({ parentRef }) => {
  const { addSection, removeSection, sortedSections } = useSectionDataStore();

  const addSectionHandler = () => {
    // addSection("1", parentRef);
  };

  return (
    <div>
      <div style={{ height: "100%" }}>
        <div onClick={addSectionHandler}>add column</div>
        <ScrollerDiv>
          <div style={{ padding: ".5rem" }}>
            {sortedSections().map(section => (
              <Styled.SectionsGrid onClick={() => removeSection(section._id)} key={section._id}>
                <div>
                  <Icon name={section.icon} size={16} />
                </div>
                <div>{section.title}</div>
                <div>{section.slot}</div>
              </Styled.SectionsGrid>
            ))}
          </div>
        </ScrollerDiv>
      </div>
    </div>
  );
};
