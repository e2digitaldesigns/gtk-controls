import React from "react";

interface ShowMessagesProps {
  inline?: boolean;
  message: string;
  name: string;
  nameColor: string;
}

export const ChatMessageSingle: React.FC<ShowMessagesProps> = ({
  inline = false,
  message,
  name,
  nameColor
}) => {
  const urlRegex = /(https:\/\/static-cdn\.jtvnw\.net\/[^\s]+)/g;
  const parts = message.split(urlRegex);

  const renderedContent = parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return <img key={index} src={part} alt={`Emote ${index}`} style={{ height: "1rem" }} />;
    }

    return <span key={index}>{part}</span>;
  });

  return inline ? (
    <div>
      <span style={{ color: nameColor || "#fff" }}>{name}: &nbsp; </span>
      {renderedContent}
    </div>
  ) : (
    <div>
      <div style={{ color: nameColor || "#fff" }}>{name} </div>
      {renderedContent}
    </div>
  );
};
