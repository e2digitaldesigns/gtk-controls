import React from "react";
import {
  Icon,
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

type button = {
  action: string;
  gridArea: string;
  label: React.FC | string;
  type?: string;
};

export const buttonsArr: button[] = [
  {
    action: "topic-prev",
    gridArea: "topic-prev",
    label: "Prev Topic",
    type: "gtkOverlayAction"
  },
  {
    action: "topic-next",
    gridArea: "topic-next",
    label: "Next Topic",
    type: "gtkOverlayAction"
  },
  {
    action: "timer-pause",
    gridArea: "timer-pause",
    label: "Pause Timer",
    type: "gtkOverlayAction"
  },
  {
    action: "timer-resume",
    gridArea: "timer-resume",
    label: "Resume Timer",
    type: "gtkOverlayAction"
  },
  {
    action: "overlay-reset",
    gridArea: "overlay-reset",
    label: "Reset Overlay",
    type: "gtkOverlayAction"
  },
  {
    action: "topic-next",
    gridArea: "topic-next",
    label: "Next Topic",
    type: "gtkOverlayAction"
  },
  {
    action: "",
    gridArea: "blank",
    label: ""
  },
  {
    action: "clear-host-votes",
    gridArea: "clear-host-votes",
    label: "Clear Host Votes",
    type: "gtkOverlayAction"
  },
  {
    action: "clear-topic-votes",
    gridArea: "clear-topic-votes",
    label: "Clear Topic Votes",
    type: "gtkOverlayAction"
  },
  {
    action: "video-seek-backward",
    gridArea: "video-seek-backward",
    label: ChevronLeft,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-stop",
    gridArea: "video-stop",
    label: StopCircle,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-pause",
    gridArea: "video-pause",
    label: StopCircle,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-play",
    gridArea: "video-play",
    label: Play,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-seek-forward",
    gridArea: "video-seek-forward",
    label: Play,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-show-hide",
    gridArea: "toggle",
    label: Power,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-mute",
    gridArea: "video-volume-mute",
    label: VolumeX,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-down",
    gridArea: "video-volume-down",
    label: Volume1,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-up",
    gridArea: "video-volume-up",
    label: Volume2,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-small",
    gridArea: "video-size-small",
    label: Minimize,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-normal",
    gridArea: "video-size-normal",
    label: Monitor,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-fullscreen",
    gridArea: "video-size-fullscreen",
    label: Maximize,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-up",
    gridArea: "video-volume-up",
    label: Volume2,
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-custom-1",
    gridArea: "video-size-custom-1",
    label: "C1",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-custom-2",
    gridArea: "video-size-custom-2",
    label: "C2",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-custom-3",
    gridArea: "video-size-custom-3",
    label: "C3",
    type: "gtkOverlayVideoPlayer"
  }
];
