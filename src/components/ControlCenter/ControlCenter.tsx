import React, { FC } from "react";
import * as Styled from "./ControlCenter.styles";

import VideoControls from "../Controls/VideoControls/VideoControls";
import OverlayControls from "../Controls/OverlayControls/OverlayControls";
import { HelmetHeader } from "../Shared";
import { ControlCenterHeader } from "./CCHeader/CCHeader";
import { ChatQueue } from "../ChatDock/ChatQueue";
import { ChatMessages } from "../ChatDock/ChatMessages/ChatMessages";
import { EpisodeComponent } from "./Episode/Episode";

interface ControlCenterProps {
  twitchUsername: string;
}

export const ControlCenter: FC<ControlCenterProps> = ({ twitchUsername }) => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

  return (
    <>
      <HelmetHeader title="GTK Overlay Control Center" />
      <Styled.ControlCenterWrapper>
        <ControlCenterHeader setIsSettingsOpen={setIsSettingsOpen} />
        <ChatQueue />
        <Styled.ControlCenterGrid>
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
