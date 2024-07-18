import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as Styled from "./Controls.styles";

import { Settings } from "react-feather";
import { ControlsSettingsDrawer } from "./ControlsSettingDrawer/ControlsSettingsDrawer";

import OverlayControls from "./OverlayControls/OverlayControls";
import VideoControls from "./VideoControls/VideoControls";
import { ErrorComponent, HelmetHeader, TemplateSelector } from "../Shared";
import { storageKeys } from "../../utils";

const ControlsDock: React.FC = () => {
  const { uid } = useParams();
  const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
  const [showVideoControls, setShowVideoControls] = React.useState<boolean>(false);

  const STORAGE_KEYS = storageKeys(uid as string);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.VIDEO_CONTROLS);
    const value = data === "true" ? true : false;
    setShowVideoControls(value);
  }, [STORAGE_KEYS.VIDEO_CONTROLS]);

  const handleButtonAction = async (action: string, type: string = "gtkOverlayAction") => {
    if (!uid) return;

    const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;

    const link = `${BASE_API_URL}?tid=${selectedTemplate}&uid=${uid}&action=${action}`;

    await axios.get(link);
  };

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

          <TemplateSelector callBack={setSelectedTemplate} origin="controls" uid={uid} />
        </Styled.SelectWrapper>

        <OverlayControls handleButtonAction={handleButtonAction} />

        {showVideoControls && <VideoControls handleButtonAction={handleButtonAction} />}
      </Styled.ControlDockWrapper>
    </>
  );
};

export default ControlsDock;
