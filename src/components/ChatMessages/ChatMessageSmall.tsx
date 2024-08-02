import React, { FC } from "react";
import * as Styled from "./ChatMessages.styles";

import { ChatMessageSingle } from "./ChatMessageSingle";
import { ChatMessageOptions } from "../ChatMessageOptions/ChatMessageOptions";
import { ChatMessage } from "../../Types";

interface ChatMessageLargeProps {
  message: ChatMessage;
}

export const ChatMessageSmall: FC<ChatMessageLargeProps> = ({ message }) => {
  return (
    <Styled.ChatMessageGrid key={message._id}>
      <Styled.ChatMessage>
        <ChatMessageSingle
          inline={true}
          message={message.msgEmotes}
          name={message.name}
          nameColor={message.fontColor}
        />
      </Styled.ChatMessage>
      <ChatMessageOptions message={message} showDelete={false} />
    </Styled.ChatMessageGrid>
  );
};
