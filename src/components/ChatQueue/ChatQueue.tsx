import React from "react";
import * as Styled from "./ChatQueue.styles";

import { useMessageDataStore } from "../../dataStores";
import timeArray from "./timing.json";
import { handleHideChatMessage, handleSendQueuedChatMessage, Icon } from "../../utils";

interface ChatQueueProps {}

export const ChatQueue: React.FC<ChatQueueProps> = () => {
  const { messageQueue, removeFromQueue, showTime, setShowTime, transition } = useMessageDataStore(
    state => state
  );

  const handleSendMessage = async () => {
    await handleSendQueuedChatMessage(messageQueue, showTime, transition, removeFromQueue);
  };

  return (
    <Styled.ChatQueueWrapper>
      <Styled.IconWrapper>
        Queue: &nbsp;<span>{messageQueue.length}</span>
      </Styled.IconWrapper>

      <Styled.IconWrapper>
        <Styled.TimeSelectorWrapper
          value={showTime}
          onChange={e => setShowTime(Number(e.target.value))}
        >
          {timeArray.map((time: any) => (
            <option key={time.time} value={time.time}>
              {time.name}
            </option>
          ))}
        </Styled.TimeSelectorWrapper>
      </Styled.IconWrapper>

      <Styled.IconWrapper>
        {messageQueue.length > 0 ? (
          <Icon name="Play" onClick={handleSendMessage} />
        ) : (
          <Icon name="Play" style={{ opacity: 0.25 }} />
        )}
      </Styled.IconWrapper>

      <Styled.IconWrapper>
        <Icon name="XCircle" onClick={() => handleHideChatMessage()} />
      </Styled.IconWrapper>
    </Styled.ChatQueueWrapper>
  );
};
