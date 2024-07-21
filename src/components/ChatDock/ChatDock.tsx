import React from "react";

import { Settings, PauseCircle } from "react-feather";

import * as Styled from "./ChatDock.styles";
import { SettingsDrawer } from "./SettingDrawer/SettingsDrawer";
import { ErrorComponent, HelmetHeader, TemplateSelector } from "../Shared";

import { ChatQueue } from "./ChatQueue";
import { ChatMessages } from "../ChatMessages/ChatMessages";
import { useUserDataStore } from "../../dataStores";

const ChatDock: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
  const { userData } = useUserDataStore(state => state);

  const handleSettingsClose = (): void => {
    setIsSettingsOpen(false);
  };

  if (!userData.userId || !userData.twitchUsername) return <ErrorComponent title="GTK Chat Dock" />;

  return (
    <>
      <HelmetHeader title="GTK Chat Dock" />
      <SettingsDrawer isOpen={isSettingsOpen} handleSettingsClose={handleSettingsClose} />
      <Styled.ChatDockWrapper>
        <Styled.SelectWrapper>
          <Styled.IconWrapper onClick={() => setIsSettingsOpen(true)}>
            <Settings />
          </Styled.IconWrapper>

          <TemplateSelector origin="chatDock" />

          <Styled.PausedIconWrapper isPaused={false}>
            <PauseCircle />
          </Styled.PausedIconWrapper>
        </Styled.SelectWrapper>

        <ChatQueue />

        <ChatMessages />
      </Styled.ChatDockWrapper>
    </>
  );
};

export default ChatDock;
