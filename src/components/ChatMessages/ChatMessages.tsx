import React, { FC, useState } from "react";
import * as Styled from "./ChatMessages.styles";

import { useMessageDataStore } from "../../dataStores";
import { ScrollerDiv } from "../Shared";
import { ChatMessageLarge } from "./ChatMessageLarge";
import { ChatMessageSmall } from "./ChatMessageSmall";
import { usePersistScrollTop } from "../../hooks";

interface ChatMessagesProps {
  size?: "small" | "large";
  sectionId?: string;
}

export const ChatMessages: FC<ChatMessagesProps> = React.memo(
  ({ size = "small", sectionId }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const { filteredChatMessages } = useMessageDataStore(state => state);

    const innerRef = React.useRef<HTMLDivElement>(null);
    const messages = filteredChatMessages();

    usePersistScrollTop({ sectionRef: innerRef, sectionId });

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
            size === "small" ? (
              <ChatMessageSmall key={message._id} message={message} />
            ) : (
              <ChatMessageLarge key={message._id} message={message} />
            )
          )}
        </ScrollerDiv>
      </Styled.ChatMessageWrapper>
    );
  },
  (prevProps, nextProps) => {
    console.log(prevProps);
    console.log(nextProps);
    return false;
  }
);
