import React, { FC } from "react";
import * as Styled from "./ChatMessages.styles";

import { ChatMessageSingle } from "./ChatMessageSingle";
import { ChatMessageOptions } from "../ChatMessageOptions/ChatMessageOptions";
import { ChatMessage } from "../../Types";

interface ChatMessageLargeProps {
  message: ChatMessage;
}

export const ChatMessageLarge: FC<ChatMessageLargeProps> = ({ message }) => {
  return (
    <Styled.ChatMessageGridLarge key={message._id}>
      <Styled.ChatMessageLarge>
        <Styled.ChatMessageImage>
          <img src={message.url} alt="Profile" />
        </Styled.ChatMessageImage>

        <Styled.ChatMessageInfoContainer>
          <ChatMessageSingle
            message={message.msgEmotes}
            name={message.name}
            nameColor={message.fontColor}
          />
          <ChatMessageOptions message={message} showDelete={true} position="left" />
        </Styled.ChatMessageInfoContainer>
      </Styled.ChatMessageLarge>
    </Styled.ChatMessageGridLarge>
  );
};
