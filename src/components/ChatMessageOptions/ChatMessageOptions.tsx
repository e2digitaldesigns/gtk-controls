import React from "react";
import * as Styled from "./ChatMessageOptions.styles";

import { useMessageDataStore, useUserDataStore } from "../../dataStores";
import { chatVoteFn, handleDeleteChatMessage, handleSendChatMessageNow, Icon } from "../../utils";
import { ChatMessage } from "../../Types";

interface ChatMessageOptionsProps {
  message: ChatMessage;
  showDelete?: boolean;
  position?: string;
}

export const ChatMessageOptionsInner: React.FC<ChatMessageOptionsProps> = ({
  message,
  showDelete = false,
  position = "right"
}) => {
  const {
    deleteMessage,
    addToQueue,
    messageQueue,
    removeFromQueue,
    showTime,
    templateId,
    transition
  } = useMessageDataStore(state => state);

  const { userData } = useUserDataStore(state => state);
  const { userId } = userData;

  const handleVote = async (action: "like" | "dislike") => {
    userId && chatVoteFn(userId as string, action, message._id);
  };

  const handleSendMessage = (chatMessage: ChatMessage) => {
    handleSendChatMessageNow(templateId, userId as string, chatMessage, showTime, transition);
  };

  const removeMessage = async (messageId: string) => {
    if (!userId) return;

    await handleDeleteChatMessage(templateId, userId as string, messageId);
    await deleteMessage(messageId);
  };

  return (
    <Styled.ChatMessageOptionsWrapper position={position}>
      <Styled.ChatMessageIcons>
        <Icon name="ThumbsUp" onClick={() => handleVote("like")} />
      </Styled.ChatMessageIcons>

      <Styled.ChatMessageIcons>
        <Icon name="ThumbsDown" onClick={() => handleVote("dislike")} />
      </Styled.ChatMessageIcons>

      <Styled.ChatMessageIcons>
        <Icon name="ArrowRightCircle" onClick={() => handleSendMessage(message)} />
      </Styled.ChatMessageIcons>

      {messageQueue?.find(msg => msg._id === message._id) ? (
        <Styled.ChatMessageIcons>
          <Icon name="MinusSquare" onClick={() => removeFromQueue(message)} />
        </Styled.ChatMessageIcons>
      ) : (
        <Styled.ChatMessageIcons>
          <Icon name="PlusSquare" onClick={() => addToQueue(message)} />
        </Styled.ChatMessageIcons>
      )}

      {showDelete && (
        <>
          <div />
          <Styled.ChatMessageIcons>
            <Icon name="Trash" onClick={() => removeMessage(message._id)} />
          </Styled.ChatMessageIcons>{" "}
        </>
      )}
    </Styled.ChatMessageOptionsWrapper>
  );
};

export const ChatMessageOptions = React.memo(ChatMessageOptionsInner);
