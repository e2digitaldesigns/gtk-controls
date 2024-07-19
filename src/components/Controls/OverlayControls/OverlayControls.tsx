import React from "react";
import { useParams } from "react-router-dom";

import * as Styled from "./../Controls.styles";
import { handleButtonAction } from "../../../utils";
import { useMessageDataStore } from "../../../dataStores";

interface IControlsOverlayProps {}

const OverlayControls: React.FC<IControlsOverlayProps> = () => {
  const { uid: userId } = useParams();

  const { templateId } = useMessageDataStore(state => state);

  const handleAction = async (action: string, type: string = "gtkOverlayAction") => {
    await handleButtonAction(templateId, userId as string, action, type);
  };

  return (
    <>
      <Styled.ButtonWrapper>
        <Styled.Buttons onClick={() => handleAction("topic-prev")}>Prev Topic</Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("topic-next")}>Next Topic</Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("timer-pause")}>Pause Timer</Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("timer-resume")}>Resume Timer</Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("overlay-reset", "gtkApplicationAction")}>
          Reset Overlay
        </Styled.Buttons>

        <Styled.Buttons onClick={() => {}}></Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("clear-host-votes", "gtkVoting")}>
          Clear Host Votes
        </Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("clear-topic-votes", "gtkVoting")}>
          Clear Topic Votes
        </Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("clear-chat-messages", "gtkChatRelay")}>
          Clear Chat
        </Styled.Buttons>

        <Styled.Buttons onClick={() => handleAction("remove-last-message", "gtkChatRelay")}>
          Remove Last Message
        </Styled.Buttons>
      </Styled.ButtonWrapper>{" "}
    </>
  );
};

export default OverlayControls;
