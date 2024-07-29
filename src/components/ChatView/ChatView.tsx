import React from "react";
import { ChatQueue } from "../ChatQueue/ChatQueue";
import { ChatMessages } from "../ChatMessages/ChatMessages";
import { SectionWrapper } from "../SectionWrapper/SectionWrapper";

interface IntChatView {}

export const ChatView: React.FC<IntChatView> = () => {
  return (
    <>
      {/* <SectionWrapper sectionHeaderTitle="Chatting"> */}
      <ChatQueue />

      <ChatMessages parent="controlCenter" />
      {/* </SectionWrapper> */}
    </>
  );
};
