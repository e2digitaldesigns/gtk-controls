import React from "react";
import * as Styled from "./../Controls.styles";

interface IControlsOverlayProps {
  handleButtonAction: (action: string, type?: string) => void;
}

const OverlayControls: React.FC<IControlsOverlayProps> = ({
  handleButtonAction
}) => {
  return (
    <>
      <Styled.ButtonWrapper>
        <Styled.Buttons onClick={() => handleButtonAction("topic-prev")}>
          Prev Topic
        </Styled.Buttons>

        <Styled.Buttons onClick={() => handleButtonAction("topic-next")}>
          Next Topic
        </Styled.Buttons>

        <Styled.Buttons onClick={() => handleButtonAction("timer-pause")}>
          Pause Timer
        </Styled.Buttons>

        <Styled.Buttons onClick={() => handleButtonAction("timer-resume")}>
          Resume Timer
        </Styled.Buttons>

        <Styled.Buttons
          onClick={() =>
            handleButtonAction("overlay-reset", "gtkApplicationAction")
          }
        >
          Reset Overlay
        </Styled.Buttons>

        <Styled.Buttons onClick={() => {}}></Styled.Buttons>

        <Styled.Buttons
          onClick={() => handleButtonAction("clear-host-votes", "gtkVoting")}
        >
          Clear Host Votes
        </Styled.Buttons>

        <Styled.Buttons
          onClick={() => handleButtonAction("clear-topic-votes", "gtkVoting")}
        >
          Clear Topic Votes
        </Styled.Buttons>

        <Styled.Buttons
          onClick={() =>
            handleButtonAction("clear-chat-messages", "gtkChatRelay")
          }
        >
          Clear Chat
        </Styled.Buttons>

        <Styled.Buttons
          onClick={() =>
            handleButtonAction("remove-last-message", "gtkChatRelay")
          }
        >
          Remove Last Message
        </Styled.Buttons>
      </Styled.ButtonWrapper>{" "}
    </>
  );
};

export default OverlayControls;
