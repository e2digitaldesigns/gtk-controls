import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as Styled from "./Controls.styles";
import { HelmetHeader } from "../utils/HelmetHeader/HelmetHeader";

import { Settings } from "react-feather";
import { ControlsSettingsDrawer } from "./ControlsSettingDrawer/ControlsSettingsDrawer";

import OverlayControls from "./OverlayControls/OverlayControls";
import VideoControls from "./VideoControls/VideoControls";

const ControlsDock: React.FC = () => {
  const { uid } = useParams();
  const [templates, setTemplates] = React.useState<any[]>([]);
  const [selectedTemplate, setSelectedTemplate] = React.useState<string>("");
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);
  const [showVideoControls, setShowVideoControls] =
    React.useState<boolean>(false);

  const origin = "controls";

  const gtkTemplateBroadcastChannel = React.useMemo(
    () => new BroadcastChannel("gtk-overlay-templateId"),
    []
  );

  const STORAGE_KEYS = {
    TEMPLATE: `@gtk/${uid}/chat-template`,
    VIDEO_CONTROLS: `@gtk/${uid}/video-controls`
  };

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEYS.VIDEO_CONTROLS);
    const value = data === "true" ? true : false;
    setShowVideoControls(value);
  }, [STORAGE_KEYS.VIDEO_CONTROLS]);

  React.useEffect(() => {
    const fetchTemplates = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_REST_API}/templates`
      );

      if (data) {
        setTemplates(data);
        const storage = window.localStorage.getItem(STORAGE_KEYS.TEMPLATE);

        storage
          ? setSelectedTemplate(storage)
          : setSelectedTemplate(data[0]._id);
      }
    };

    fetchTemplates();
  }, [STORAGE_KEYS.TEMPLATE]);

  React.useEffect(() => {
    gtkTemplateBroadcastChannel.onmessage = function (event) {
      if (origin !== event.data.origin) {
        setSelectedTemplate(event.data.templateId);
      }
    };
  }, [gtkTemplateBroadcastChannel]);

  const handleSelectTemplate = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const templateId = e.target.value;
    gtkTemplateBroadcastChannel.postMessage({ origin: "controls", templateId });
    setSelectedTemplate(templateId);
    window.localStorage.setItem(STORAGE_KEYS.TEMPLATE, templateId);

    axios.put(`${process.env.REACT_APP_REST_API}/chatTemplate`, {
      userId: uid,
      templateId
    });
  };

  const handleButtonAction = async (
    action: string,
    type: string = "gtkOverlayAction"
  ) => {
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

  if (!uid)
    return (
      <>
        <HelmetHeader title="GTK Control Dock" />
        <Styled.ControlDockWrapper>
          <Styled.Error> USER ID must be set!</Styled.Error>
        </Styled.ControlDockWrapper>
      </>
    );

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

          <select value={selectedTemplate} onChange={handleSelectTemplate}>
            {templates.map(template => (
              <option key={template._id} value={template._id}>
                {template.name}
              </option>
            ))}
          </select>
        </Styled.SelectWrapper>

        <OverlayControls handleButtonAction={handleButtonAction} />

        {showVideoControls && (
          <VideoControls handleButtonAction={handleButtonAction} />
        )}
      </Styled.ControlDockWrapper>
    </>
  );
};

export default ControlsDock;
