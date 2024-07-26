import React, { FC, useState } from "react";
import * as Styled from "./ChatMessages.styles";

import { useMessageDataStore } from "../../dataStores";
import { ChatMessageSingle } from "./ChatMessageSingle";
import { ScrollerDiv } from "../Shared";
import { ChatMessageOptions } from "../ChatMessageOptions/ChatMessageOptions";

interface ChatMessagesProps {
  parent?: string;
}

export const ChatMessages: FC<ChatMessagesProps> = ({ parent = "chatDock" }) => {
  const innerRef = React.useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { filteredChatMessages } = useMessageDataStore(state => state);
  const messages = filteredChatMessages();

  React.useEffect(() => {
    if (!isHovering) {
      innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  return (
    <Styled.ChatMessageWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ScrollerDiv divRef={innerRef}>
        {messages.map(message =>
          parent === "chatDock" ? (
            <Styled.ChatMessageGrid key={message._id}>
              <Styled.ChatMessage>
                <ChatMessageSingle
                  inline={true}
                  message={message.msgEmotes}
                  name={message.name}
                  nameColor={message.fontColor}
                />
              </Styled.ChatMessage>
              <ChatMessageOptions message={message} parent={parent} />
            </Styled.ChatMessageGrid>
          ) : (
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
                  <ChatMessageOptions message={message} parent={parent} position="left" />
                </Styled.ChatMessageInfoContainer>
              </Styled.ChatMessageLarge>
            </Styled.ChatMessageGridLarge>
          )
        )}
      </ScrollerDiv>
    </Styled.ChatMessageWrapper>
  );
};
