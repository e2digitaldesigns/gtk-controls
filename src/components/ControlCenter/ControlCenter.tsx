import React, { FC } from "react";
import * as Styled from "./ControlCenter.styles";

import VideoControls from "../Controls/VideoControls/VideoControls";
import OverlayControls from "../Controls/OverlayControls/OverlayControls";
import { HelmetHeader } from "../Shared";
import { ControlCenterHeader } from "./CCHeader/CCHeader";
import { ChatQueue } from "../ChatDock/ChatQueue";

import { EpisodeComponent } from "./Episode/Episode";
import { ChatMessages } from "../ChatMessages/ChatMessages";

interface ControlCenterProps {
  twitchUsername: string;
}

export const ControlCenter: FC<ControlCenterProps> = ({ twitchUsername }) => {
  const [, setIsSettingsOpen] = React.useState<boolean>(false);

  return (
    <>
      <HelmetHeader title="GTK Overlay Control Center" />
      <Styled.ControlCenterWrapper data-testid="yyy">
        <ControlCenterHeader setIsSettingsOpen={setIsSettingsOpen} />
        <ChatQueue />
        <Styled.ControlCenterGrid data-testid="xxx">
          <ChatMessages parent="controlCenter" />
          <EpisodeComponent twitchUsername={twitchUsername} />

          <div>
            <OverlayControls />
            <VideoControls />
          </div>
        </Styled.ControlCenterGrid>
      </Styled.ControlCenterWrapper>
    </>
  );
};
