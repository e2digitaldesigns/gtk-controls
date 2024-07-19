import React from "react";
import { useParams } from "react-router-dom";
import * as Styled from "./ChatDock.styles";
import { Play, XCircle } from "react-feather";

import { useMessageDataStore } from "../../dataStores";
import timeArray from "./timing.json";
import { handleHideChatMessage, handleSendQueuedChatMessage } from "../../utils";

interface ChatQueueProps {}

export const ChatQueue: React.FC<ChatQueueProps> = () => {
  const { uid } = useParams();
  const { messageQueue, removeFromQueue, showTime, setShowTime, templateId, transition } =
    useMessageDataStore(state => state);

  const handleSendMessage = async () => {
    await handleSendQueuedChatMessage(
      templateId,
      uid as string,
      messageQueue,
      showTime,
      transition,
      removeFromQueue
    );
  };

  return (
    <Styled.OptionWrapper>
      <Styled.IconWrapper>
        Queue: &nbsp;<span>{messageQueue.length}</span>
      </Styled.IconWrapper>

      <Styled.IconWrapper>
        <select value={showTime} onChange={e => setShowTime(Number(e.target.value))}>
          {timeArray.map(time => (
            <option key={time.time} value={time.time}>
              {time.name}
            </option>
          ))}
        </select>
      </Styled.IconWrapper>

      <Styled.IconWrapper>
        {messageQueue.length > 0 ? (
          <Play onClick={handleSendMessage} />
        ) : (
          <Play style={{ opacity: 0.25 }} />
        )}
      </Styled.IconWrapper>

      <Styled.IconWrapper>
        <XCircle onClick={() => handleHideChatMessage(templateId, uid as string)} />
      </Styled.IconWrapper>
    </Styled.OptionWrapper>
  );
};
