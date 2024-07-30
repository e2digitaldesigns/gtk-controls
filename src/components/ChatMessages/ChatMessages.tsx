import React, { FC, useState } from "react";
import * as Styled from "./ChatMessages.styles";

import { useMessageDataStore, useSectionDataStore } from "../../dataStores";
import { ScrollerDiv } from "../Shared";
import { ChatMessageLarge } from "./ChatMessageLarge";
import { ChatMessageSmall } from "./ChatMessageSmall";

interface ChatMessagesProps {
  size?: "small" | "large";
  sectionId?: string;
}

export const ChatMessages: FC<ChatMessagesProps> = React.memo(
  ({ size = "small", sectionId }) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const { filteredChatMessages } = useMessageDataStore(state => state);
    const [scrollTop, setScrollTop] = useState<number>(0);
    const { getSectionSlot } = useSectionDataStore(state => state);

    const innerRef = React.useRef<HTMLDivElement>(null);
    const messages = filteredChatMessages();

    const sectionSlot = getSectionSlot(sectionId as string);

    React.useEffect(() => {
      if (!innerRef.current) return;
      innerRef.current.scrollTop = scrollTop;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionSlot]);

    React.useEffect(() => {
      if (!isHovering) {
        innerRef.current?.scrollTo(0, innerRef.current.scrollHeight);
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    React.useEffect(() => {
      const handleScroll = () => {
        if (innerRef.current) {
          setScrollTop(innerRef.current.scrollTop);
        }
      };

      const currentRef = innerRef.current;
      if (currentRef) {
        currentRef.addEventListener("scroll", handleScroll);
      }

      return () => {
        if (currentRef) {
          currentRef.removeEventListener("scroll", handleScroll);
        }
      };
    }, []);

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
