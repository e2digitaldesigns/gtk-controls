import React from "react";
import * as Styled from "./ScrollerDiv.styles";

interface IScrollerDivProps {
  children: React.ReactNode;
  divRef?: React.RefObject<HTMLDivElement>;
}

export const ScrollerDiv: React.FC<IScrollerDivProps> = ({ children, divRef }) => {
  return <Styled.ScrollerDivWrapper ref={divRef}>{children}</Styled.ScrollerDivWrapper>;
};
