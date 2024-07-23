export interface IControl {
  name: string;
  action: string | null;
  type?: string;
  useName?: boolean;
}

export const blankButton: IControl = {
  name: "",
  action: null,
  type: "blank"
};

export const videoPlayerActions: IControl[] = [
  { name: "Prev", action: "playlist-prev" },
  {
    name: "Back",
    action: "video-seek-backward"
  },
  { name: "Stop", action: "video-stop" },
  { name: "Pause", action: "video-pause" },
  { name: "Play", action: "video-play" },
  {
    name: "Forward",
    action: "video-seek-forward"
  },
  { name: "Next", action: "playlist-next" },

  { name: "Volume:", action: null, type: "header" },
  { name: "Down", action: "video-volume-down" },
  { name: "Up", action: "video-volume-up" },

  { name: "Size:", action: null, type: "header" },
  { name: "Small", action: "video-size-small" },
  { name: "Normal", action: "video-size-normal" },
  { name: "Full", action: "video-size-fullscreen" },

  { name: "Playlist:", action: null, type: "header" },
  { name: "Add", action: "playlist-return-now-playing", useName: true },

  { name: "Reset", action: "playlist-reset" },
  { name: "Shuffle", action: "playlist-shuffle" },
  { name: "Update", action: "update-all-video-files" },
  { name: "Clear", action: "playlist-clear" },

  blankButton,

  { name: "Delete:", action: null, type: "header" },
  { name: "Last Added", action: "playlist-delete-last" },
  { name: "Now Playing", action: "playlist-delete-now-playing-video" },
  blankButton,
  blankButton,
  blankButton,
  blankButton
];
