import React from "react";
import { ChatQueue } from "../ChatQueue/ChatQueue";
import { ChatMessages } from "../ChatMessages/ChatMessages";

interface IntChatView {
  sectionId: string;
}

export const ChatView: React.FC<IntChatView> = React.memo(({ sectionId }) => {
  return (
    <>
      <ChatQueue />
      <ChatMessages size="large" sectionId={sectionId} />
    </>
  );
});
