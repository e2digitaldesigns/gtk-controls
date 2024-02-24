import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as Styled from "./VideoRequestDock.styles";

interface IControl {
  name: string;
  action: string | null;
  type?: string;
}

const VideoRequestDock: React.FC = () => {
  const { uid } = useParams();

  const handleButtonAction = async (
    action: string,
    type: string = "gtkVideoOverlayAction"
  ) => {
    if (!uid) return;
    const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;
    const link = `${BASE_API_URL}?uid=${uid}&action=${action}`;
    await axios.get(link);
  };

  const blankButton: IControl = {
    name: "",
    action: null,
    type: "blank"
  };

  const videoPlayerActions: IControl[] = [
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
    { name: "Reset", action: "playlist-reset" },
    { name: "Shuffle", action: "playlist-shuffle" },
    { name: "Update", action: "update-all-video-files" },
    { name: "Clear", action: "playlist-clear" },
    blankButton,
    blankButton,

    { name: "Delete:", action: null, type: "header" },
    { name: "Last Added", action: "playlist-delete-last" },
    { name: "Now Playing", action: "playlist-delete-now-playing-video" },
    blankButton,
    blankButton,
    blankButton,
    blankButton
  ];

  return (
    <Styled.VideoRequestDockWrapper>
      <Styled.ButtonWrapper>
        {videoPlayerActions.map((action, index) => (
          <Styled.VideoRequestButton
            key={index}
            type={action.type}
            onClick={() =>
              action.action ? handleButtonAction(action.action) : null
            }
          >
            {action.name}
          </Styled.VideoRequestButton>
        ))}
      </Styled.ButtonWrapper>
    </Styled.VideoRequestDockWrapper>
  );
};

export default VideoRequestDock;
