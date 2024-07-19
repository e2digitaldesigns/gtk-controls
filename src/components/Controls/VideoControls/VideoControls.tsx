import React from "react";
import { useParams } from "react-router-dom";

import * as Styled from "./../Controls.styles";
import * as VideoStyled from "./VideoControls.styles";

import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Monitor,
  PauseCircle,
  Play,
  Power,
  StopCircle,
  Volume1,
  Volume2,
  VolumeX
} from "react-feather";
import { handleButtonAction } from "../../../utils";
import { useMessageDataStore } from "../../../dataStores";

interface IControlsVideoProps {}

const ControlsVideo: React.FC<IControlsVideoProps> = () => {
  const { uid: userId } = useParams();
  const { templateId } = useMessageDataStore(state => state);

  const handleAction = async (action: string, type: string = "gtkOverlayVideoPlayer") => {
    await handleButtonAction(templateId, userId as string, action, type);
  };

  return (
    <>
      <Styled.SectionHeader>Video Controls</Styled.SectionHeader>

      <VideoStyled.VideoButtonWrapper>
        <VideoStyled.SeekBackward onClick={() => handleAction("video-seek-backward")}>
          <ChevronLeft />
        </VideoStyled.SeekBackward>

        <VideoStyled.Play onClick={() => handleAction("video-play")}>
          <Play />
        </VideoStyled.Play>

        <VideoStyled.Pause onClick={() => handleAction("video-pause")}>
          <PauseCircle />
        </VideoStyled.Pause>

        <VideoStyled.Stop onClick={() => handleAction("video-stop")}>
          <StopCircle />
        </VideoStyled.Stop>

        <VideoStyled.SeekForward onClick={() => handleAction("video-seek-forward")}>
          <ChevronRight />
        </VideoStyled.SeekForward>

        <VideoStyled.Mute onClick={() => handleAction("video-volume-mute")}>
          <VolumeX />
        </VideoStyled.Mute>

        <VideoStyled.VolumeDown onClick={() => handleAction("video-volume-down")}>
          <Volume1 />
        </VideoStyled.VolumeDown>

        <VideoStyled.VolumeUp onClick={() => handleAction("video-volume-up")}>
          <Volume2 />
        </VideoStyled.VolumeUp>

        <VideoStyled.Toggle onClick={() => handleAction("video-show-hide")}>
          <Power />
        </VideoStyled.Toggle>

        <VideoStyled.Small onClick={() => handleAction("video-size-small")}>
          <Minimize />
        </VideoStyled.Small>

        <VideoStyled.Normal onClick={() => handleAction("video-size-normal")}>
          <Monitor />
        </VideoStyled.Normal>

        <VideoStyled.Fullscreen onClick={() => handleAction("video-size-fullscreen")}>
          <Maximize />
        </VideoStyled.Fullscreen>

        {/* Custom Video Sizes */}

        <VideoStyled.Custom1 onClick={() => handleAction("video-size-custom-1")}>
          C1
        </VideoStyled.Custom1>

        <VideoStyled.Custom2 onClick={() => handleAction("video-size-custom-2")}>
          C2
        </VideoStyled.Custom2>

        <VideoStyled.Custom3 onClick={() => handleAction("video-size-custom-2")}>
          C3
        </VideoStyled.Custom3>
      </VideoStyled.VideoButtonWrapper>
    </>
  );
};

export default ControlsVideo;
