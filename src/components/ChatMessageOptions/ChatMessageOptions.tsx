import React from "react";
import * as Styled from "./ChatMessageOptions.styles";

import {
  ArrowRightCircle,
  MinusSquare,
  PlusSquare,
  ThumbsDown,
  ThumbsUp,
  Trash
} from "react-feather";
import { useMessageDataStore } from "../../dataStores";
import { chatVoteFn, handleDeleteChatMessage, handleSendChatMessageNow } from "../../utils";
import { useParams } from "react-router-dom";
import { ChatMessage } from "../../Types";

interface ChatMessageOptionsProps {
  message: ChatMessage;
  showDelete?: boolean;
  position?: string;
}

export const ChatMessageOptions: React.FC<ChatMessageOptionsProps> = ({
  message,
  showDelete = false,
  position = "right"
}) => {
  const { uid } = useParams();

  const {
    deleteMessage,
    addToQueue,
    messageQueue,
    removeFromQueue,
    showTime,
    templateId,
    transition
  } = useMessageDataStore(state => state);

  const handleVote = async (name: string, action: "like" | "dislike") => {
    uid && chatVoteFn(templateId, uid as string, name, action);
  };

  const handleSendMessage = (chatMessage: ChatMessage) => {
    handleSendChatMessageNow(templateId, uid as string, chatMessage, showTime, transition);
  };

  const removeMessage = async (messageId: string) => {
    if (!uid) return;

    await handleDeleteChatMessage(templateId, uid as string, messageId);
    await deleteMessage(messageId);
  };

  return (
    <Styled.ChatMessageOptionsWrapper position={position}>
      <Styled.ChatMessageIcons>
        <ThumbsUp onClick={() => handleVote(message.name, "like")} />
      </Styled.ChatMessageIcons>

      <Styled.ChatMessageIcons>
        <ThumbsDown onClick={() => handleVote(message.name, "dislike")} />
      </Styled.ChatMessageIcons>

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

      {showDelete && (
        <>
          <div />
          <Styled.ChatMessageIcons>
            <Trash onClick={() => removeMessage(message._id)} />
          </Styled.ChatMessageIcons>{" "}
        </>
      )}
    </Styled.ChatMessageOptionsWrapper>
  );
};
