import React from "react";
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

interface IControlsVideoProps {
  handleButtonAction: (action: string, type: string) => void;
}

const ControlsVideo: React.FC<IControlsVideoProps> = ({
  handleButtonAction
}) => {
  const handleClick = (action: string) => {
    handleButtonAction(action, "gtkOverlayVideoPlayer");
  };

  return (
    <>
      <Styled.SectionHeader>Video Controls</Styled.SectionHeader>

      <VideoStyled.VideoButtonWrapper>
        <VideoStyled.SeekBackward
          onClick={() => handleClick("video-seek-backward")}
        >
          <ChevronLeft />
        </VideoStyled.SeekBackward>

        <VideoStyled.Play onClick={() => handleClick("video-play")}>
          <Play />
        </VideoStyled.Play>

        <VideoStyled.Pause onClick={() => handleClick("video-pause")}>
          <PauseCircle />
        </VideoStyled.Pause>

        <VideoStyled.Stop onClick={() => handleClick("video-stop")}>
          <StopCircle />
        </VideoStyled.Stop>

        <VideoStyled.SeekForward
          onClick={() => handleClick("video-seek-forward")}
        >
          <ChevronRight />
        </VideoStyled.SeekForward>

        <VideoStyled.Mute onClick={() => handleClick("video-volume-mute")}>
          <VolumeX />
        </VideoStyled.Mute>

        <VideoStyled.VolumeDown
          onClick={() => handleClick("video-volume-down")}
        >
          <Volume1 />
        </VideoStyled.VolumeDown>

        <VideoStyled.VolumeUp onClick={() => handleClick("video-volume-up")}>
          <Volume2 />
        </VideoStyled.VolumeUp>

        <VideoStyled.Toggle onClick={() => handleClick("video-show-hide")}>
          <Power />
        </VideoStyled.Toggle>

        <VideoStyled.Small onClick={() => handleClick("video-size-small")}>
          <Minimize />
        </VideoStyled.Small>

        <VideoStyled.Normal onClick={() => handleClick("video-size-normal")}>
          <Monitor />
        </VideoStyled.Normal>

        <VideoStyled.Fullscreen
          onClick={() => handleClick("video-size-fullscreen")}
        >
          <Maximize />
        </VideoStyled.Fullscreen>

        {/* Custom Video Sizes */}

        <VideoStyled.Custom1 onClick={() => handleClick("video-size-custom-1")}>
          C1
        </VideoStyled.Custom1>

        <VideoStyled.Custom2 onClick={() => handleClick("video-size-custom-2")}>
          C2
        </VideoStyled.Custom2>

        <VideoStyled.Custom3 onClick={() => handleClick("video-size-custom-2")}>
          C3
        </VideoStyled.Custom3>
      </VideoStyled.VideoButtonWrapper>
    </>
  );
};

export default ControlsVideo;
