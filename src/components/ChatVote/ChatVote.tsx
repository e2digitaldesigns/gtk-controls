import React from "react";
import { useParams } from "react-router-dom";

import { Settings, PauseCircle, ThumbsDown, ThumbsUp } from "react-feather";
import * as Styled from "./ChatVote.styles";

import { ErrorComponent, HelmetHeader, TemplateSelector } from "../Shared";
import { SettingsDrawer } from "./SettingDrawer/SettingsDrawer";
import { chatVoteFn } from "../../utils";
import { useMessageDataStore } from "../../dataStores";

interface ChatVoteProps {
  twitchUsername: string;
}

const ChatVote: React.FC<ChatVoteProps> = ({ twitchUsername }) => {
  const { uid } = useParams();
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = React.useState<boolean>(false);

  const innerRef = React.useRef<HTMLDivElement>(null);

  const { chatMessages, showSingleWordMessages, templateId } = useMessageDataStore(state => state);

  React.useEffect(() => {
    if (!isHovering) {
      innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatMessages]);

  const handleVote = async (name: string, action: "like" | "dislike") => {
    uid && chatVoteFn(templateId, uid, name, action);
  };

  const chatMessagesFiltered = showSingleWordMessages
    ? chatMessages
    : chatMessages.filter(str => str.msg.split(" ").length > 1);

  const handleSettingsClose = (): void => {
    setIsSettingsOpen(false);
  };

  if (!uid || !twitchUsername) return <ErrorComponent title="GTK Chat Vote" />;

  return (
    <>
      <HelmetHeader title="GTK Chat Vote" />
      <SettingsDrawer isOpen={isSettingsOpen} handleSettingsClose={handleSettingsClose} />
      <Styled.ChatDockWrapper>
        <Styled.SelectWrapper>
          <Styled.IconWrapper onClick={() => setIsSettingsOpen(true)}>
            <Settings />
          </Styled.IconWrapper>

          <TemplateSelector origin="chatVote" />

          <Styled.PausedIconWrapper isPaused={isHovering}>
            <PauseCircle />
          </Styled.PausedIconWrapper>
        </Styled.SelectWrapper>

        <Styled.ChatMessageWrapper>
          <Styled.ChatMessageWrapperInner
            ref={innerRef}
            onMouseOver={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {chatMessagesFiltered.map(message => (
              <Styled.ChatMessageGrid key={message._id} columns={2}>
                <Styled.ChatMessage>
                  {message.name}: {message.msg}
                </Styled.ChatMessage>

                <>
                  <Styled.ChatMessageIcons>
                    <ThumbsUp onClick={() => handleVote(message.name, "like")} />
                  </Styled.ChatMessageIcons>

                  <Styled.ChatMessageIcons>
                    <ThumbsDown onClick={() => handleVote(message.name, "dislike")} />
                  </Styled.ChatMessageIcons>
                </>
              </Styled.ChatMessageGrid>
            ))}
          </Styled.ChatMessageWrapperInner>
        </Styled.ChatMessageWrapper>
      </Styled.ChatDockWrapper>
    </>
  );
};

export default ChatVote;
