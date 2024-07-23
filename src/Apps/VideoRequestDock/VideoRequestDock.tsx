import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as Styled from "./VideoRequestDock.styles";
import { videoPlayerActions } from "./videoPlayerActions";

const VideoRequestDock: React.FC = () => {
  const [username, setUsername] = React.useState<string | null>(null);
  const { uid } = useParams();

  const handleButtonAction = async (action: string) => {
    if (!uid) return;
    const type = "gtkVideoOverlayAction";
    const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;
    const link = `${BASE_API_URL}?uid=${uid}&action=${action}`;
    await axios.get(link);
  };

  const handleButtonActionUsername = async (action: string) => {
    if (!uid || !username) return;
    const type = "gtkVideoOverlayAction";
    const BASE_API_URL = `${process.env.REACT_APP_PUSH_SERVICE}/api/v1/socket/manual/${type}`;
    const link = `${BASE_API_URL}?uid=${uid}&action=${action}`;
    await axios.post(link, { username });
  };

  React.useEffect(() => {
    const getUsername = async () => {
      if (!uid) return;
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_REST_API}/twitch/twitchUsername/${uid}`
        );

        if (data) {
          console.log(35, data);
          setUsername(data.twitchUsername);
        }
      } catch (error) {
        setUsername(null);
      }
    };

    getUsername();
  }, [uid]);

  return (
    <Styled.VideoRequestDockWrapper>
      <Styled.ButtonWrapper>
        {videoPlayerActions.map((action, index) => (
          <Styled.VideoRequestButton
            key={index}
            type={action.type}
            onClick={() =>
              action.useName && action.action
                ? handleButtonActionUsername(action.action)
                : action.action
                ? handleButtonAction(action.action)
                : null
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
