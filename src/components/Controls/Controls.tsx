import React from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./Controls.styles";

import { Settings } from "react-feather";
import { ControlsSettingsDrawer } from "./ControlsSettingDrawer/ControlsSettingsDrawer";

import OverlayControls from "./OverlayControls/OverlayControls";
import VideoControls from "./VideoControls/VideoControls";
import { ErrorComponent, HelmetHeader, TemplateSelector } from "../Shared";
import { storageKeys } from "../../utils";

const ControlsDock: React.FC = () => {
  const { uid } = useParams();
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
  const [showVideoControls, setShowVideoControls] = React.useState<boolean>(false);

  const STORAGE_KEYS = storageKeys(uid as string);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.VIDEO_CONTROLS);
    const value = data === "true" ? true : false;
    setShowVideoControls(value);
  }, [STORAGE_KEYS.VIDEO_CONTROLS]);

  const handleSettingsClose = (): void => {
    setIsSettingsOpen(false);
  };

  const handleShowVideoControls = (): void => {
    const value = !showVideoControls;
    setShowVideoControls(value);
    window.localStorage.setItem(STORAGE_KEYS.VIDEO_CONTROLS, String(value));
  };

  if (!uid) return <ErrorComponent title="GTK Controls" />;

  return (
    <>
      <HelmetHeader title="GTK Control Dock" />

      <ControlsSettingsDrawer
        isOpen={isSettingsOpen}
        handleSettingsClose={handleSettingsClose}
        showVideoControls={showVideoControls}
        handleShowVideoControls={handleShowVideoControls}
      />

      <Styled.ControlDockWrapper>
        <Styled.SelectWrapper>
          <Styled.IconWrapper onClick={() => setIsSettingsOpen(true)}>
            <Settings />
          </Styled.IconWrapper>

          <TemplateSelector origin="controls" />
        </Styled.SelectWrapper>

        <OverlayControls />

        {showVideoControls && <VideoControls />}
      </Styled.ControlDockWrapper>
    </>
  );
};

export default ControlsDock;
