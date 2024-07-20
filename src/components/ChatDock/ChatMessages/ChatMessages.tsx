import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { chatVoteFn, handleDeleteChatMessage, handleSendChatMessageNow } from "../../../utils";

import * as Styled from "./ChatMessages.styles";
import {
  ArrowRightCircle,
  MinusSquare,
  PlusSquare,
  ThumbsDown,
  ThumbsUp,
  Trash
} from "react-feather";
import { ChatMessage } from "../../../Types";
import { useMessageDataStore } from "../../../dataStores";
import { ChatMessageSingle } from "./ChatMessageSingle";

interface ChatMessagesProps {
  parent?: string;
}

export const ChatMessages: FC<ChatMessagesProps> = ({ parent = "chatDock" }) => {
  const { uid } = useParams();
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const {
    deleteMessage,
    addToQueue,
    filteredChatMessages,
    messageQueue,
    removeFromQueue,
    showTime,
    templateId,
    transition
  } = useMessageDataStore(state => state);
  const messages = filteredChatMessages();

  const handleVote = async (name: string, action: "like" | "dislike") => {
    uid && chatVoteFn(templateId, uid as string, name, action);
  };

  React.useEffect(() => {
    if (!isHovering) {
      innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  const handleSendMessage = (chatMessage: ChatMessage) => {
    handleSendChatMessageNow(templateId, uid as string, chatMessage, showTime, transition);
  };

  const removeMessage = async (messageId: string) => {
    if (!uid) return;

    await handleDeleteChatMessage(templateId, uid as string, messageId);
    await deleteMessage(messageId);
  };

  const ChatMessageWrapper =
    parent === "chatDock" ? Styled.ChatMessageWrapper : Styled.ChatMessageWrapperCC;

  return (
    <ChatMessageWrapper>
      <Styled.ChatMessageWrapperInner
        ref={innerRef}
        onMouseOver={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {messages.map(message => (
          <Styled.ChatMessageGrid key={message._id} columns={parent === "controlCenter" ? 7 : 3}>
            <Styled.ChatMessage>
              <ChatMessageSingle
                message={message.msgEmotes}
                name={message.name}
                nameColor={message.fontColor}
              />
            </Styled.ChatMessage>

            {parent === "controlCenter" && (
              <>
                <Styled.ChatMessageIcons>
                  <ThumbsUp onClick={() => handleVote(message.name, "like")} />
                </Styled.ChatMessageIcons>

                <Styled.ChatMessageIcons>
                  <ThumbsDown onClick={() => handleVote(message.name, "dislike")} />
                </Styled.ChatMessageIcons>
              </>
            )}

            <div />

            <Styled.ChatMessageIcons>
              <ArrowRightCircle onClick={() => handleSendMessage(message)} />
            </Styled.ChatMessageIcons>

            {messageQueue?.find(msg => msg._id === message._id) ? (
              <Styled.ChatMessageIcons>
                <MinusSquare onClick={() => removeFromQueue(message)} />
              </Styled.ChatMessageIcons>
            ) : (
              <Styled.ChatMessageIcons>
                <PlusSquare onClick={() => addToQueue(message)} />
              </Styled.ChatMessageIcons>
            )}

            {parent === "controlCenter" && (
              <>
                <div />
                <Styled.ChatMessageIcons>
                  <Trash onClick={() => removeMessage(message._id)} />
                </Styled.ChatMessageIcons>{" "}
              </>
            )}
          </Styled.ChatMessageGrid>
        ))}
      </Styled.ChatMessageWrapperInner>
    </ChatMessageWrapper>
  );
};
