import React from "react";

import * as Styled from "./ErrorComponent.styles";
import { HelmetHeader } from "../HelmetHeader/HelmetHeader";

interface ErrorProps {
  description?: string;
  title: string;
}

export const ErrorComponent: React.FC<ErrorProps> = ({ description, title }) => {
  return (
    <>
      <HelmetHeader description={description} title={title} />

      <Styled.ChatDockWrapper>
        <Styled.ErrorWrapper>
          <span>You must be connected to Twitch to use this Dock.</span>
        </Styled.ErrorWrapper>
      </Styled.ChatDockWrapper>
    </>
  );
};
