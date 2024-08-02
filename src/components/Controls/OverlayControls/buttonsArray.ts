type button = {
  action: string;
  gridArea: string;
  icon?: string;
  label?: string;
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
    type: "gtkApplicationAction"
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
    type: "gtkVoting"
  },
  {
    action: "clear-topic-votes",
    gridArea: "clear-topic-votes",
    label: "Clear Topic Votes",
    type: "gtkVoting"
  },
  {
    action: "video-seek-backward",
    gridArea: "video-seek-backward",
    icon: "ChevronLeft",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-stop",
    gridArea: "video-stop",
    icon: "StopCircle",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-pause",
    gridArea: "video-pause",
    icon: "PauseCircle",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-play",
    gridArea: "video-play",
    icon: "Play",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-seek-forward",
    gridArea: "video-seek-forward",
    icon: "ChevronRight",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-show-hide",
    gridArea: "toggle",
    icon: "Power",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-mute",
    gridArea: "video-volume-mute",
    icon: "VolumeX",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-down",
    gridArea: "video-volume-down",
    icon: "Volume1",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-up",
    gridArea: "video-volume-up",
    icon: "Volume2",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-small",
    gridArea: "video-size-small",
    icon: "Minimize",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-normal",
    gridArea: "video-size-normal",
    icon: "Monitor",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-size-fullscreen",
    gridArea: "video-size-fullscreen",
    icon: "Maximize",
    type: "gtkOverlayVideoPlayer"
  },
  {
    action: "video-volume-up",
    gridArea: "video-volume-up",
    icon: "Volume2",
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
