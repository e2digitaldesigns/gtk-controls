import React from "react";
import { ChatQueue } from "../ChatQueue/ChatQueue";
import { ChatMessages } from "../ChatMessages/ChatMessages";

export const ChatView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem"
      }}
    >
      <ChatQueue />

      <ChatMessages parent="controlCenter" />
    </div>
  );
};
