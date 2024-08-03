import { EpisodeHost } from "../../../Types";

type Button = {
  action?: string;
  gridArea: string;
  icon?: string;
  label?: string;
  socket?: string;
};

export const buttonsArr: Button[] = [
  {
    action: "topic-prev",
    gridArea: "topic-prev",
    label: "Prev Topic",
    socket: "gtkOverlayAction"
  },
  {
    action: "topic-next",
    gridArea: "topic-next",
    label: "Next Topic",
    socket: "gtkOverlayAction"
  },
  {
    action: "timer-pause",
    gridArea: "timer-pause",
    label: "Pause Timer",
    socket: "gtkOverlayAction"
  },
  {
    action: "timer-resume",
    gridArea: "timer-resume",
    label: "Resume Timer",
    socket: "gtkOverlayAction"
  },
  {
    action: "overlay-reset",
    gridArea: "overlay-reset",
    label: "Reset Overlay",
    socket: "gtkApplicationAction"
  },
  {
    action: "topic-next",
    gridArea: "topic-next",
    label: "Next Topic",
    socket: "gtkOverlayAction"
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
    socket: "gtkVoting"
  },
  {
    action: "clear-topic-votes",
    gridArea: "clear-topic-votes",
    label: "Clear Topic Votes",
    socket: "gtkVoting"
  }
];

//Video Buttons
const videoButtonArray: Partial<Button>[] = [
  {
    action: "video-seek-backward",
    icon: "ChevronLeft"
  },
  {
    action: "video-stop",
    icon: "StopCircle"
  },
  {
    action: "video-pause",
    icon: "PauseCircle"
  },
  {
    action: "video-play",
    icon: "Play"
  },
  {
    action: "video-seek-forward",
    icon: "ChevronRight"
  },
  {
    action: "video-show-hide",
    icon: "Power"
  },
  {
    action: "video-volume-mute",
    icon: "VolumeX"
  },
  {
    action: "video-volume-down",
    icon: "Volume1"
  },
  {
    action: "video-volume-up",
    icon: "Volume2"
  },
  {
    action: "video-size-small",
    icon: "Minimize"
  },
  {
    action: "video-size-normal",
    icon: "Monitor"
  },
  {
    action: "video-size-fullscreen",
    icon: "Maximize"
  },
  {
    action: "video-volume-up",
    icon: "Volume2"
  },
  {
    action: "video-size-custom-1",
    label: "C1"
  },
  {
    action: "video-size-custom-2",
    label: "C2"
  },
  {
    action: "video-size-custom-3",
    label: "C3"
  }
];

for (let i = 0; i < videoButtonArray.length; i++) {
  buttonsArr.push({
    action: videoButtonArray[i].action,
    gridArea: videoButtonArray[i].action || "",
    label: videoButtonArray[i].label || "",
    icon: videoButtonArray[i].icon || "",
    socket: "gtkOverlayVideoPlayer"
  });
}

//Host Voting Buttons
export const hostVoteButtonArray: Button[] = [];

const hostArray = [1, 2, 3, 4];
const labelArray = ["Host", "!v", "!sv", "!win", "!d"];

for (let hostIndex = 1; hostIndex < hostArray.length + 1; hostIndex++) {
  for (let labelIndex = 0; labelIndex < labelArray.length; labelIndex++) {
    hostVoteButtonArray.push({
      action: `${labelArray[labelIndex]}${hostIndex}`,
      gridArea: `vote-${hostIndex}-${labelIndex + 1}`,
      label: `${labelArray[labelIndex]}${hostIndex}`,
      socket: "gtkVoting"
    });
  }
}

export const handleHostVoteArr = (hosts: EpisodeHost[]): Button[] => {
  const dataSet = [
    { action: "Host", label: "Host" },
    { action: "!v", label: "U" },
    { action: "!sv", label: "S" },
    { action: "!win", label: "W" },
    { action: "!d", label: `D` }
  ];

  const hostVoteButtonArray: Button[] = [];

  const seatToHostNameMap = hosts.reduce((map, host) => {
    map[`Host${host.seatNum}`] = host.hostName;
    return map;
  }, {} as { [key: string]: string });

  hosts.forEach((_, hostIndex) => {
    dataSet.forEach((data, labelIndex) => {
      let buttonLabel = `${data.label}${data.label === "Host" ? hostIndex + 1 : ""}`;
      buttonLabel = buttonLabel.replace(/Host\d+/g, match => seatToHostNameMap[match] || match);

      hostVoteButtonArray.push({
        action: `${data.action}${hostIndex + 1}`,
        gridArea: `vote-${hostIndex + 1}-${labelIndex + 1}`,
        label: buttonLabel.substring(0, 10),
        socket: "gtkVoting"
      });
    });
  });

  return hostVoteButtonArray;
};
